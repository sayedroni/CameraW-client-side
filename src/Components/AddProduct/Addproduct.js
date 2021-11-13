import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Addproduct = () => {
    const {logOut} = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
        fetch('https://obscure-ravine-78219.herokuapp.com/Collection',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data),
    })
    .then(res => res.json())
    .then(result => {
        if(result){
            alert('Food added'); 
            reset();
        }
    })

    };


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
                <div className="dasContent">
                    <h2>Dashboard</h2>
                    <h5>Add new product</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="p-2 m-2" {...register("title")} placeholder="Title" />
                    
                    <input className="p-2 m-2" {...register("Details", { required: true })} placeholder="Details" />

                    <input className="p-2 m-2" {...register("image", { required: true })} placeholder="Image Uri" />

                    <input className="p-2 m-2" type="number" {...register("price", { required: true })} placeholder="Price" />
                   
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <input className="btn btn-danger mt-3" type="submit" value="Add Product" />
                    </form>
                   
                </div>
            </Col>
        </Row>
            
        </div>
    );
};

export default Addproduct;