import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  const mockProps = {
    title: 'Proyecto Test',
    description: 'Descripción del proyecto',
    technologies: ['React', 'TypeScript']
  };

  it('muestra el título del proyecto', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText('Proyecto Test')).toBeInTheDocument();
  });

  it('muestra la descripcion', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText('Descripción del proyecto')).toBeInTheDocument();
  });

  it('muestra las tecnologías', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renderiza como enlace cuando se proporciona link', () => {
    const { container } = render(
      <ProjectCard {...mockProps} link="https://github.com/test" />
    );
    const link = container.querySelector('a[href="https://github.com/test"]');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renderiza como div cuando no hay link', () => {
    const { container } = render(<ProjectCard {...mockProps} />);
    const div = container.querySelector('div[style*="cursor: default"]');
    expect(div).toBeInTheDocument();
  });

  it('muestra todas las tecnologias en la lista', () => {
    render(
      <ProjectCard 
        {...mockProps} 
        technologies={['React', 'TypeScript', 'Node.js']} 
      />
    );
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });
});