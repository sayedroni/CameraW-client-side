import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './collection.css'

const Collection = () => {
    
    const [cameras,setcamera] = useState([]);

    useEffect(()=>{
        fetch('https://obscure-ravine-78219.herokuapp.com/Collection')
        .then(res => res.json())
        .then(data=> setcamera(data))
    },[])

    return (
        <div id="collection" className="collection">
            
            <h1>Our Camera Collection</h1>
            <div className=" collctionCard">
            {
                cameras.slice(0,6).map(camera=>
                
                <div>
                    <Container>
                   
                    <Card>
                    <Row   sm={12} >
                    <Col>
                        <Card.Img variant="top" src={camera.image} />
                        <Card.Body>
                            <Card.Title>{camera.title}</Card.Title>
                            <Card.Text>{camera.Details}</Card.Text>
                            <Card.Title>Price: ${camera.price}</Card.Title>
                            <Link to={`/Collection/${camera._id}`}><Button variant="primary">Buy Now</Button></Link>
                        </Card.Body>
                        </Col>
                   </Row>
                    </Card>
                    
                    </Container>
                </div>
                
                )
            }
            </div>
            
        </div>
    );
};

export default Collection;