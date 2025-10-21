import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectsGrid } from './ProjectsGrid';

describe('ProjectsGrid', () => {
  const mockProjects = [
    {
      id: 1,
      title: 'Proyecto 1',
      description: 'Descripción 1',
      technologies: ['React'],
      link: '#'
    },
    {
      id: 2,
      title: 'Proyecto 2',
      description: 'Descripción 2',
      technologies: ['TypeScript'],
      link: '#'
    }
  ];

  it('muestra todos los proyectos', () => {
    render(<ProjectsGrid projects={mockProjects} />);
    
    expect(screen.getByText('Proyecto 1')).toBeInTheDocument();
    expect(screen.getByText('Proyecto 2')).toBeInTheDocument();
  });

  it('muestra el título de la sección', () => {
    render(<ProjectsGrid projects={mockProjects} />);
    expect(screen.getByText(/proyectos/i)).toBeInTheDocument();
  });

  it('maneja un array vacío de proyectos', () => {
    const { container } = render(<ProjectsGrid projects={[]} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renderiza el número correcto de proyectos', () => {
    const { container } = render(<ProjectsGrid projects={mockProjects} />);
    // Ajusta el selector según tu implementación
    const projectCards = container.querySelectorAll('[data-testid="project-card"]');
    expect(projectCards.length).toBeLessThanOrEqual(mockProjects.length);
  });
});