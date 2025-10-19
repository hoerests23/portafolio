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
    const [activePath, setActivePath] = useState(location.pathname)

    useEffect(() => {
        setActivePath(location.pathname)   
    }, [location.pathname])

    return(
        <nav style={{
            display: 'flex', 
            flexDirection: 'column'
            }}>
            {items.map((item, index) => (
                <div key={index} style={{
                    position: 'relative',
                    borderLeft: activePath === item.path ? '3px solid #fff' : '3px solid transparent',
                    paddingLeft: '10px',
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