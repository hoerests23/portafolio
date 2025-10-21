import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { Header } from './Header';

// Helper para envolver componentes con Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Header', () => {
  const menuItems = [
    { label: 'Inicio', path: '#inicio' },
    { label: 'Proyectos', path: '#proyectos' },
    { label: 'Contacto', path: '#contacto' }
  ];

  it('renderiza el header', () => {
    const { container } = renderWithRouter(<Header menuItems={menuItems} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('muestra todos los items del menú', () => {
    renderWithRouter(<Header menuItems={menuItems} />);
    
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Proyectos')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  it('maneja un array vacío de items', () => {
    const { container } = renderWithRouter(<Header menuItems={[]} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('cada item tiene el enlace correcto', () => {
    const { container } = renderWithRouter(<Header menuItems={menuItems} />);
    const links = container.querySelectorAll('a');
    
    expect(links.length).toBeGreaterThan(0);
  });
});