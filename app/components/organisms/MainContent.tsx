import React, { Children } from "react";

interface MainContentProps {
    children: React.ReactNode
}

export const MainContent: React.FC<MainContentProps> = ({children}) => {
    return(
        <main style={{
            flex: 1,
            padding: '20px',
            maxWidth: '900px',
            minHeight: '100vh'
        }}>
            {children}
        </main>
    )
}