import React from "react";

interface TextProps{
    children: React.ReactNode
    size?: 'small' | 'medium' | 'large' | 'xl'
    weight?: 'light' | 'normal' | 'bold'
    color?: string
    className?: string,
    style?: React.CSSProperties;
}

export const Text: React.FC<TextProps> = ({
    children,
    size = 'medium',
    weight = 'light',
    color = '#fff',
    className = '',
    style: customStyle
}) => {

  const sizeMap = {
  small: '14px',
  medium: '16px',
  large: '32px',
  xl: '64px'
  }

  const weightMap = {
    light: '300',
    normal: '400',
    bold: '700'
  }

  //combinar estilos
  const defaultStyle: React.CSSProperties = {
    fontSize: sizeMap[size],
    fontWeight: weightMap[weight],
    color: color,
    letterSpacing: size === 'xl' ? '-2px' : '0',
    margin: 0,
    padding: 0,
    display: 'block'
  };

  const finalStyle = { ...defaultStyle, ...customStyle };

  //retornar elemento
  return (
    <span style={finalStyle} className={className}>
      {children}
    </span>
  );

}