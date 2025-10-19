import React from "react";

interface TextProps{
    children: React.ReactNode
    size?: 'small' | 'medium' | 'large' | 'xl'
    weight?: 'light' | 'normal' | 'bold'
    color?: string
    className?: string
}

export const Text: React.FC<TextProps> = ({
    children,
    size = 'medium',
    weight = 'light',
    color = '#fff',
    className = ''
}) => {

    const sizeMap = {
    small: '14px',
    medium: '16px',
    large: '32px',
    xl: '72px'
  }

  const weightMap = {
    light: '300',
    normal: '400',
    bold: '700'
  }

  //cambiar estilos segun props
  const style: React.CSSProperties = {
    fontSize: sizeMap[size],           
    fontWeight: weightMap[weight],     
    color: color,
    letterSpacing: size === 'xl' ? '-2px' : '0',  //para textos mas grandes (por eso xl jeje)
    margin: 0,
    padding: 0
  };
  //retornar elemento
  return (
    <span style={style} className={className}>
      {children}
    </span>
  );

}