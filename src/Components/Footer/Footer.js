
import "./Footer.css"
import {Container,Row,Button,Col} from 'react-bootstrap';

import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <Container className="footer-container">
                <Row>
                    <Col lg={4} md={4}>
                        <h5>This is the footer</h5>
                        <h6>Links : </h6>
                        <h6>Links : </h6>
                        <h6>Links : </h6>
                        <h6>Links : </h6>
                    </Col>
                    <Col lg={4} md={4}>
                        <h5>This is the footer 2</h5>
                        <h6>Links : </h6>
                        <h6>Links : </h6>
                        <h6>Links : </h6>
                        <h6>Links : </h6>
                    </Col>
                    <Col lg={4} md={4}>
                        <h5>This is the footer 3</h5>
                        <h6>Links : </h6>
                        <h6>Links : </h6>
                        <h6>Links : </h6>
                        <h6>Links : </h6>
                    </Col>
                    
                </Row>
                <div className="d-flex align-items-center justify-content-center pt-5">
                    <p>Hii this application was a simple aproach to learn React </p>
                </div>
            </Container>
            
        </div>
    )
}

export default Footer
