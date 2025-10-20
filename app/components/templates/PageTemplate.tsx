import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface PageTemplateProps {
    header: React.ReactNode
    mainContent: React.ReactNode
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
    header,
    mainContent
}) => {
    return (
    <div style={{
      background: 'transparent',
      minHeight: '100vh',
      color: '#fff'
    }}>
      {header}
      <div style={{
        paddingTop: '120px', 
        paddingBottom: '60px',
        paddingLeft: '30px',
        paddingRight: '30px',
        minHeight: '100vh'
      }}>
        {mainContent}
      </div>
    </div>
    )
}