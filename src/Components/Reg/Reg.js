import React, { useState } from 'react';
import { Container, Form,Button, Spinner } from 'react-bootstrap';
import { Link ,useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import '../Login/login.css'

const Reg = () => {

    const history = useHistory()
    const {registerUser,user,isLoading} = useAuth();

    const [logindata,setlogindata] = useState({})

    const regOnchange = e =>{
        const field = e.target.name
        const value = e.target.value
        const newLoginData = {...logindata};
        newLoginData[field] = value;
        console.log(newLoginData)
        setlogindata(newLoginData);
       
       
    }

    const regHandler = e =>{
        e.preventDefault()
        registerUser(logindata.email, logindata.password,logindata.displayName, history)
        if(logindata.password.length < 6){
            alert('password atleast 6 ')
            return ;
          }
          else{
              alert('Registration Successfull')
          }
          
        
    }

    return (
        <div className="login-bg">
          
            <Container>
                <div className="Lform">
                   
                 
                    <h2>Register</h2>
                   
             <Form onSubmit={regHandler}>
               
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="displayName" onChange={regOnchange} type="text" placeholder="Enter name" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" onChange={regOnchange} type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={regOnchange} type="password" placeholder="Password" />
                </Form.Group>
                
                <p>Already Registered? <Link to="/login">Log In</Link></p>
                { user?.email &&
                    <h6>Registration Successfull</h6>
                }
                
            <Button onClick={registerUser} variant="primary" type="submit" >
                    Register
            </Button>
           
              
                </Form>
                </div>
            </Container>
            
        </div>
    );
};

export default Reg;