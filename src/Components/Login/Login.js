import React, { useState } from 'react';
import { Container, Form,Button, Spinner } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './login.css'

const Login = () => {

    const [logindata,setlogindata] = useState({})
    const {loginUser,isLoading} = useAuth()

    const location = useLocation();
    const history = useHistory();

    const loginOnchange = e =>{
        const field = e.target.name
        const value = e.target.value
        const newLoginData = {...logindata};
        newLoginData[field] = value;
        console.log(newLoginData)
        setlogindata(newLoginData)
       
    }

    const loginHandler = e =>{
        loginUser(logindata.email,logindata.password, location,history)
        e.preventDefault()
        console.log(loginUser)
    }
    return (
        <div className="login-bg">
            
            <Container>
                <div className="Lform">
                    <h2>Login</h2>
                    { !isLoading &&
                <Form onSubmit={loginHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" onChange={loginOnchange} type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={loginOnchange} type="password" placeholder="Password" />
                </Form.Group>

                <p>New User? <Link to="/reg">Register</Link></p>
                
                
                <Button variant="primary" type="submit" >
                    Log In
                </Button>
                </Form> }

         { isLoading &&   <Spinner animation="border" /> }
                
                
                
                </div>
            </Container>
        </div>
    );
};

export default Login;