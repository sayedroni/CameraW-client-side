import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './form.css'

const Update = () => {
    const {logOut} = useAuth();

    const {id} = useParams()
    const [update,setupdate] =useState({})
    useEffect(()=>{
        const url = `https://obscure-ravine-78219.herokuapp.com/Collection/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setupdate(data))
    },[])

    const handletitle = e =>{
        const Title = e.target.value;
        const updatetitle = {title:Title, Details:update.Details,price:update.price}
        setupdate(updatetitle);
    }

    const handledetails = e =>{
        const details = e.target.value;
        const updatetitle = {title:update.title, Details:details,price:update.price}
        setupdate(updatetitle);
    }

    const handleprice = e =>{
        const Price = e.target.value;
        const updatetitle = {title:update.title, Details:update.Details,price:Price}
        setupdate(updatetitle);
    }

    const updateHandle = e =>{
    const url = `https://obscure-ravine-78219.herokuapp.com/Collection/${id}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(update)

        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                alert('Successfully Updated')
                setupdate({});
            }
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
                <div className="dasContent updateForm">
                    <h2>Dashboard</h2>
                    <h5>Update Product Information</h5>
            <form onSubmit={updateHandle}>
                <input type="text" onChange={handletitle} value={update.title || ' '} placeholder="title" />

                <input type="text" onChange={handledetails} value={update.Details || ' '} placeholder="Details" />

                <input type="number" onChange={handleprice} value={update.price || ' '} placeholder="price" />

                <input id="update" type="submit" value="Update" />
            </form>
                   
                </div>
            </Col>
        </Row>
            
        </div>
    );
};

export default Update;