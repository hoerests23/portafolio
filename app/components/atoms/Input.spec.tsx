import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renderiza el input', () => {
    const { container } = render(<Input value="" onChange={() => {}} />);
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
  });

  it('muestra el valor', () => {
    const { container } = render(
      <Input value="valor de prueba" onChange={() => {}} />
    );
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('valor de prueba');
  });

  it('dispara onChange al escribir', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Input value="" onChange={handleChange} />
    );
    const input = container.querySelector('input') as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: 'nuevo valor' } });
    expect(handleChange).toHaveBeenCalledWith('nuevo valor');
  });

  it('muestra el placeholder', () => {
    render(<Input value="" onChange={() => {}} placeholder="Ingresa tu nombre" />);
    const input = screen.getByPlaceholderText('Ingresa tu nombre');
    expect(input).toBeInTheDocument();
  });

  it('maneja diferentes tipos de input', () => {
    const { container } = render(
      <Input value="" onChange={() => {}} type="email" />
    );
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input.type).toBe('email');
  });

  it('renderiza textarea cuando type es textarea', () => {
    const { container } = render(
      <Input value="" onChange={() => {}} type="textarea" />
    );
    const textarea = container.querySelector('textarea');
    expect(textarea).toBeInTheDocument();
  });

  it('aplica el atributo required', () => {
    const { container } = render(
      <Input value="" onChange={() => {}} required />
    );
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input.required).toBe(true);
  });

  it('cambia estilos al hacer focus', () => {
    const { container } = render(
      <Input value="" onChange={() => {}} />
    );
    const input = container.querySelector('input') as HTMLInputElement;
    
    fireEvent.focus(input);
    expect(input.style.background).toBe('rgba(255, 255, 255, 0.08)');
    
    fireEvent.blur(input);
    expect(input.style.background).toBe('rgba(255, 255, 255, 0.05)');
  });
});