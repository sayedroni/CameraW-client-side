import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './admin.css'

const Admin = () => {
    const {logOut} = useAuth();

    const [email,setemail] = useState('');

    const handleOnblur = e =>{
        setemail(e.target.value)
    }

    const handleMakeadmin = e =>{
        const user = {email}
        fetch('https://obscure-ravine-78219.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
           alert('Successfully Make Admin')
          
        })

        e.preventDefault();
    }

    return (
        <div>
            
      <Row>
            <Col xs={4} md={3}>
                <div className="dasNav dboard">
                    <Link to="/"><h3>Camera World</h3></Link>

                    <div className="dashboardNav">

                        <Link to="/myorder">My Order</Link>
                        <Link to="/addreview">Add Review</Link>
                        <Link to="/addproduct">Add Product</Link>
                        <Link to="/manage">Manage Product</Link>
                        <Link to="/admin">Make Admin</Link>
                        <Link to="/payment">Payment</Link>

                    </div>

                    <Button onClick={logOut}>Log Out</Button>
                    
                </div>
            </Col>
            <Col xs={8} md={9}>
                <div className="dasContent admininput">
                    <h2>Dashboard</h2>
                    <h5>Make Admin</h5>

                    <form onSubmit={handleMakeadmin}>
                        <input onBlur={handleOnblur} type="email" />
                        <input id="adminbtn" type="submit" value="Make Admin" />
                    </form>
                   
                </div>
            </Col>
        </Row> 
            
        </div>
    );
};

export default Admin;