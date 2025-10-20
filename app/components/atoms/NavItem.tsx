import React, {useState} from "react";
import { Link } from "react-router";

interface NavItemProps {
    to: string; //ruta a dirigir
    children: React.ReactNode //texto del link
}

export const NavItem: React.FC<NavItemProps> = ({ to, children}) => {
    //hook useState, si mouse está encima
    const [isHovered, setIsHovered] = useState(false);

    //estilos segun estado
    const style: React.CSSProperties = {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '300',
    display: 'block',
    marginBottom: '20px',
    opacity: isHovered ? 0.6 : 1,  //ternario si esta el mouse o no encima
    transition: 'opacity 0.3s ease', //delay transicion
    cursor: 'pointer'
    };

    return (
    <>
        {to.startsWith('#') ? (
            <a 
                href={to}
                style={style}
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(to);
                    if (target) {
                        target.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                        
                        window.history.pushState(null, '', to);
                        window.dispatchEvent(new HashChangeEvent('hashchange'));
                    }
                }}
            >
                {children}
            </a>
        ) : (
            <Link 
                to={to}
                style={style}
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
            >
                {children}
            </Link>
        )}
    </>
    );
}