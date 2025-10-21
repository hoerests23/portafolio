import React from 'react';
import { Text } from '../atoms/Text';

//Texto de presentacion principal

interface HeroTextProps {
    name: string;
    subtitle?: string;
    description?: string;
    profileImage?: string;
}

export const HeroText: React.FC<HeroTextProps> = ({ 
    name, 
    subtitle, 
    description,
    profileImage
}) => {
    return (
        <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                //gap: '10px'
            }}>
            <Text size='xl' weight='bold'>
                {name}
            </Text>
            {subtitle && ( //se agrega al ser opcional, si esta vacio o no
            <Text size='medium' weight='normal'>
                {subtitle}
            </Text>
            )}
            {description && (
                <div style={{
                    whiteSpace: 'pre-line',
                    maxWidth: '600px'
                }}>
                    <Text size='small' color='#ccc'>
                    {description}
                    </Text>
                </div>
            )}
            {profileImage && (
                <img 
                    src={profileImage} 
                    alt="Profile" 
                    style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid rgba(255, 255, 255, 0.1)'
                    }}
                />
            )}

            

        </div>
  )
}