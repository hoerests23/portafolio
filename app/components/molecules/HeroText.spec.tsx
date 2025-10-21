import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { HeroText } from './HeroText';

describe('HeroText', () => {
  it('muestra el nombre', () => {
    const { getByText } = render(<HeroText name="Bastián Moya" />);
    expect(getByText('Bastián Moya')).toBeInTheDocument();
  });

  it('muestra el subtítulo cuando existe', () => {
    const { getByText } = render(
      <HeroText 
        name="Bastián Moya" 
        subtitle="Estudiante de ingeniería en informática"
      />
    );
    expect(getByText('Estudiante de ingeniería en informática')).toBeInTheDocument();
  });

  it('oculta el subtítulo cuando no se proporciona', () => {
    const { queryByText } = render(<HeroText name="Bastián Moya" />);
    expect(queryByText('Estudiante')).not.toBeInTheDocument();
  });

  it('muestra la descripción cuando existe', () => {
    const { getByText } = render(
      <HeroText 
        name="Bastián Moya" 
        description="Descripción de prueba"
      />
    );
    expect(getByText('Descripción de prueba')).toBeInTheDocument();
  });
});