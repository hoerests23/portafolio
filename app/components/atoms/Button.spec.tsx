import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('muestra el texto', () => {
    const { getByText } = render(<Button>Haz clic</Button>);
    expect(getByText('Haz clic')).toBeInTheDocument();
  });

  it('ejecuta onClick al hacer clic', () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Haz clic</Button>
    );
    
    fireEvent.click(getByText('Haz clic'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('se deshabilita cuando disabled es true', () => {
    const { getByText } = render(<Button disabled>Deshabilitado</Button>);
    expect(getByText('Deshabilitado')).toBeDisabled();
  });
});