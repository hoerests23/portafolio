import React, { useState, useEffect } from 'react';
import { Navigation } from '../molecules/Navigation';
import { Text } from '../atoms/Text';

interface SidebarProps {
  menuItems: Array<{
    label: string;
    path: string;
  }>;
  logoText?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ menuItems, logoText }) => {
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
  const opacity = scrollY > 100 ? 0.4 : 1; //opacidad segun scroll

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      padding: '20px 0',
      transition: 'opacity 0.3s ease', 
      opacity: opacity //cambiar con scroll
    }}>
      
      {logoText && (
        <div>
          <Text 
            size={'large'}  
            weight="bold"
          >
            {logoText}
          </Text>
        </div>
      )}
      <Navigation items={menuItems} />
      <Text size="small" color="#555">
        Scroll: {scrollY}px
      </Text>
    </div>
  );
};