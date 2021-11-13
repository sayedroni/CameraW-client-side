import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './header.css'

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div id="header">
           
           <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/home">CAMERA WORLD</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="/home#header">Home</Nav.Link>
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
            <div className="banner-img">
                    <h2>We have best camera collection</h2>
                    <Button>Learn More</Button>
            </div>

         
               
           
        </div>
    );
};

export default Header;