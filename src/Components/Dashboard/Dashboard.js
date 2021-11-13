import React from 'react';
import { Button, Col,  Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './dashboard.css'

const Dashboard = () => {
    const {logOut,admin} = useAuth();
    return (
        <div>
            
      <Row>
            <Col xs={4} md={3}>
                <div className="dasNav dboard">
                    <Link to="/"><h3>Camera World</h3></Link>

                    <div className="dashboardNav">

                        <Link to="/myorder">My Order</Link>
                        <Link to="/addreview">Add Review</Link>
                        { admin &&
                         <>
                        
                        <Link to="/addproduct">Add Product</Link>
                        <Link to="/manage">Manage Product</Link>
                        <Link to="/admin">Make Admin</Link>
                        
                        </>

                        }
                        <Link to="/payment">Payment</Link>

                    </div>

                    <Button onClick={logOut}>Log Out</Button>
                    
                </div>
            </Col>
            <Col xs={8} md={9}>
                <div className="dasContent">
                    <h2>Dashboard</h2>
                   
                </div>
            </Col>
        </Row> 
            
        </div>
    );
};

export default Dashboard;