import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './manage.css'

const ManageProduct = () => {
    const {logOut} = useAuth();

    const [services,setservice] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/Collection')
        .then(res => res.json())
        .then(result => setservice(result))
    },[])

    const deletehandle = id =>{
        const confirm = window.confirm("Are you sure to delete service")
          if(confirm){
            const   url = `http://localhost:5000/Collection/${id}`;
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount){
                    alert('Deleted')
                    const remaining = services.filter(service=> service._id !==id );
                    setservice(remaining);
                }
            })
          }
        }

    return (
        <div>
            
        <Row>
            <Col xs={4} md={3}>
                <div className="dasNav ">
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
                <div className="dasContent manage">
                    <h2>Dashboard</h2>
                    <h5>Manage All Product</h5>

                    {
                   services.map(service => <div>
                      <Row>
                          <Col>
                          <Table striped bordered hover>
                            <thead>
                                <tr>
                                
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Manage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                               
                                <td>{service.title}</td>
                                <td>{service.Details}</td>
                                <td>${service.price}</td>
                                <Button onClick={()=> deletehandle(service._id)}>DELETE</Button>

                               <Link to={`/update/${service._id}`}> <Button >UPDATE</Button></Link>
                                </tr>
                            </tbody>
                            </Table>
                          </Col>
                      </Row>
                   </div>)
               }
                   
                </div>
            </Col>
        </Row>
            
        </div>
    );
};

export default ManageProduct;