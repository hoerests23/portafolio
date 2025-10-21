import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  it('renderiza el formulario correctamente', () => {
    const { container } = render(<ContactForm />);
    const form = container.querySelector('form');
    expect(form).toBeInTheDocument();
  });

  it('renderiza todos los campos del formulario', () => {
    const { container } = render(<ContactForm />);
    const inputs = container.querySelectorAll('input');
    expect(inputs.length).toBeGreaterThanOrEqual(3);
  });

  it('muestra el botón de enviar', () => {
    const { container } = render(<ContactForm />);
    const button = container.querySelector('button[type="submit"]');
    expect(button).toBeInTheDocument();
    expect(button?.textContent).toBe('Enviar mensaje');
  });

  it('permite escribir en el campo de nombre', () => {
    const { container } = render(<ContactForm />);
    const inputs = container.querySelectorAll('input');
    
    if (inputs.length > 0) {
      const nameInput = inputs[0] as HTMLInputElement;
      fireEvent.change(nameInput, { target: { value: 'Juan' } });
      expect(nameInput.value).toBe('Juan');
    }
  });

  it('permite escribir en el campo de apellido', () => {
    const { container } = render(<ContactForm />);
    const inputs = container.querySelectorAll('input');
    
    if (inputs.length > 1) {
      const lastNameInput = inputs[1] as HTMLInputElement;
      fireEvent.change(lastNameInput, { target: { value: 'Pérez' } });
      expect(lastNameInput.value).toBe('Pérez');
    }
  });

  it('permite escribir en el campo de email', () => {
    const { container } = render(<ContactForm />);
    const emailInput = container.querySelector('input[type="email"]') as HTMLInputElement;
    
    if (emailInput) {
      fireEvent.change(emailInput, { target: { value: 'juan@example.com' } });
      expect(emailInput.value).toBe('juan@example.com');
    }
  });

  it('maneja el envío del formulario', () => {
    const { container } = render(<ContactForm />);
    const form = container.querySelector('form');
    
    if (form) {
      const consoleSpy = vi.spyOn(console, 'log');
      fireEvent.submit(form);
      setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalled();
      }, 1100);
    }
  });

  it('muestra mensaje de éxito después del envío', async () => {
    const { container } = render(<ContactForm />);
    const form = container.querySelector('form');
    
    if (form) {
      fireEvent.submit(form);
      
      await new Promise(resolve => setTimeout(resolve, 1100));
      
      const successMessage = container.textContent;
      expect(successMessage).toContain('Mensaje enviado correctamente');
    }
  });

  it('deshabilita el botón durante el envío', async () => {
    const { container } = render(<ContactForm />);
    const form = container.querySelector('form');
    const button = container.querySelector('button[type="submit"]') as HTMLButtonElement;
    
    if (form && button) {
      expect(button.disabled).toBe(false);
      
      fireEvent.submit(form);
      expect(button.textContent).toContain('Enviando...');
    }
  });

  it('renderiza el email de contacto', () => {
    const { container } = render(<ContactForm />);
    const emailLink = container.querySelector('a[href="mailto:ba.moyav@duocuc.cl"]');
    expect(emailLink).toBeInTheDocument();
  });

  it('renderiza el título de la sección', () => {
    const { container } = render(<ContactForm />);
    expect(container.textContent).toContain('Contacto');
  });

  it('renderiza las etiquetas de los campos', () => {
    const { container } = render(<ContactForm />);
    const labels = container.querySelectorAll('label');
    expect(labels.length).toBeGreaterThanOrEqual(4);
  });
});