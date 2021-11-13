import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './about.css'

const Aboutus = () => {
    return (
        <div id="about">
            <Container className="aboutus">
                <Row>
                    <Col>
                        <img src="https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                    </Col>
                    <Col>
                        <h5>About us</h5>
                        <p>Camera world is the best site to buy camera.We provide best camera.Our delivary is too fast.Camera world is the best site to buy camera.We provide best camera.Our delivary is too fast.Camera world is the best site to buy camera.We provide best camera.Our delivary is too fast.Camera world is the best site to buy camera.We provide best camera.Our delivary is too fast.Camera world is the best site to buy camera.We provide best camera.Our delivary is too fast.Camera world is the best site to buy camera.We provide best camera.Our delivary is too fast.Camera world is the best site to buy camera.We provide best camera.Our delivary is too fast.Camera world is the best site to buy camera.We provide best camera.Our delivary is too fast.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Aboutus;