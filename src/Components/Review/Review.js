import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './review.css'

const Review = () => {

    const [reviews,setreviews] = useState([]);
    

    useEffect(()=>{
        fetch('https://obscure-ravine-78219.herokuapp.com/review')
        .then( res=> res.json())
        .then(data => setreviews(data))
    },[])

    return (
        <div id="review" className="review">
            <h1>Customar Feedback</h1>
            <div>
                <Container>
                    <Row>
                        <Col className="reviewCard">
                        
                        {
                          reviews.map(review =>
                          
                          <div>
                              <Card>
                               
                                <Card.Body>
                                    <blockquote className="blockquote ">
                                    <p>
                                        
                                       {review.Details}
                                    </p>
                                    <footer className="blockquote-footer">
                                         <cite title="Source Title">{review.name}</cite>
                                    </footer>

                                    <h6>Rating {review.rating} out of 5</h6>
                                    </blockquote>
                                </Card.Body>
                                </Card>
                          </div>
                          
                          )  
                        }
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Review;