import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Text } from './Text';

describe('Text Component', () => {
  it('renderiza el texto correctamente', () => {
    const { getByText } = render(<Text>Hola Mundo</Text>);
    expect(getByText('Hola Mundo')).toBeInTheDocument();
  });

  it('aplica el tamaño large', () => {
    const { container } = render(<Text size="large">Texto Grande</Text>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('aplica color personalizado', () => {
    const { container } = render(<Text color="#ff0000">Texto Rojo</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveStyle({ color: 'rgb(255, 0, 0)' });
  });
});