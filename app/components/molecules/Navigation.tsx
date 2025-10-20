import React, { useEffect, useState } from "react";
import { NavItem } from "../atoms/NavItem";
import { useLocation } from "react-router";

interface NavigationProps{
    items: Array<{
        label: string; //texto a mostrar
        path: string; //ruta a navegar
    }>
}

//recorrer paths 
export const Navigation: React.FC<NavigationProps> = ({items}) => {

    const location = useLocation()
    //item activo
    const [activePath, setActivePath] = useState(location.hash || '/');

    useEffect(() => {
        const handleHashChange = () => {
            setActivePath(window.location.hash || '/');
        };
        
        window.addEventListener('hashchange', handleHashChange);
        
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);
    useEffect(() => {
    const handleScroll = () => {
        const sections = ['#inicio', '#info', '#projects', '#contact'];
        
        for (const section of sections) {
            const element = document.querySelector(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    setActivePath(section);
                    break;
                }
            }
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

    return(
        <nav style={{
            display: 'flex', 
            flexDirection: 'row',
            gap: '40px',
            alignItems: 'center'
            }}>
            {items.map((item, index) => (
                <div key={index} style={{
                    position: 'relative',
                    borderBottom: activePath === item.path 
                        ? '2px solid #fff' : '2px solid transparent',
                    paddingBottom: '4px',
                    transition: 'border-color 0.3s ease'
                }}>
                <NavItem key={index} to={item.path}>
                    {item.label}
                </NavItem>
                </div>
            ))}
        </nav>
    )


}