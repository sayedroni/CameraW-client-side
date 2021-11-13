import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Nav, Navbar  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import '../OurCollection/collection.css'

const Mcollection = () => {
    const {user,logOut} = useAuth();
    const [cameras,setcamera] = useState([]);

    useEffect(()=>{
       
        fetch('http://localhost:5000/Collection')
        .then(res => res.json())
        .then(data=> setcamera(data))
    },[])

    return (
        
        <div className="collection">
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/home">CAMERA WORLD</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Link to="/home">Home</Link>
                        <Nav.Link href="/home#collection">Collection</Nav.Link>
                        <Nav.Link href="/home#review">Review</Nav.Link>
                        <Nav.Link href="/home#about">About Us</Nav.Link>
                        <Link to="/more">More Collection</Link>
                        </Nav>
                        {
                            user?.email ?
                           <div className="dasbtn">
                               <Link to="/dashboard"> <Button>Dashboard</Button></Link>
                                <Button onClick={logOut}>Log Out</Button>
                                <span>{user.displayName}</span>

                           </div>
                        :
                        <Nav>
                        <Button><Link to="/login">Log In</Link></Button>
                        </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <h1>Our All Collection</h1>
            <div className=" collctionCard">
            {
                cameras.map(camera=>
                
                <div>
                    <Container>
                    <Card>
                        <Card.Img variant="top" src={camera.image} />
                        <Card.Body>
                            <Card.Title>{camera.title}</Card.Title>
                            <Card.Text>{camera.Details}</Card.Text>
                            <Card.Title>Price: ${camera.price}</Card.Title>
                            <Link to={`/Collection/${camera._id}`}><Button variant="primary">Buy Now</Button></Link>
                        </Card.Body>
                    </Card>
                    </Container>
                </div>
                
                )
            }
            </div>
            
        </div>
    );
};

export default Mcollection;