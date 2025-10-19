import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface PageTemplateProps {
    sidebar: React.ReactNode
    mainContent: React.ReactNode
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
    sidebar,
    mainContent
}) => {
    return(
        <div style={{
            background: '#0a0a0a',
            minHeight: '100vh',
            color: '#fff',
            padding: '60px 50px'
        }}>
        <Container fluid>
            <Row>
                <Col xs={12} md={3} lg={2}>
                {sidebar}
                </Col>

                <Col xs={12} md={9} lg={10}>
                {mainContent}
                </Col>
            </Row>
      </Container>
        </div>
    )
}