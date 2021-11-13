import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Addreview = () => {
    const {logOut,admin} = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
        fetch('http://localhost:5000/review',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data),
    })
    .then(res => res.json())
    .then(result => {
        if(result){
            alert('Review added'); 
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
                    <h5>Add Product Review </h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className="p-2 m-2" {...register("name")} placeholder="Name" />
                    
                    
                    
                    {/* include validation with required or other standard HTML validation rules */}
                    <input className="p-2 m-2" {...register("Details", { required: true })} placeholder="Details" />


                    <input className="p-2 m-2" type="number" {...register("rating", { required: true })} placeholder="Give rating out of 5" />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <input className="btn btn-danger mt-3" type="submit" value="Add Review" />
                    </form>
                                
                </div>
            </Col>
        </Row>
            
        </div>
    );
};

export default Addreview;