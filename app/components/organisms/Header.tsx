import React, { useState, useEffect } from 'react';
import { Navigation } from '../molecules/Navigation';
import { Text } from '../atoms/Text';

interface HeaderProps {
  menuItems: Array<{
    label: string;
    path: string;
  }>;
}

export const Header: React.FC<HeaderProps> = ({ menuItems}) => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => { //cada vez que se scrolee
    const handleScroll = () => {
      setScrollY(window.scrollY); //actualizar segun la posicion del scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const opacity = scrollY > 100 ? 0.90 : 1; //opacidad segun scroll
  const backdropBlur = scrollY > 50 ? '10px' : '0px';

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: `rgba(10, 10, 10, ${opacity})`,
      backdropFilter: `blur(${backdropBlur})`,
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      transition: 'all 0.3s ease',
      padding: '10px 50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center' 
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1400px',
        gap: '60px'
      }}>
        <Navigation items={menuItems} />
      </div>
    </header>
  );
};