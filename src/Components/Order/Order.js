import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './order.css'

const Order = () => {
    const {id} = useParams();
    const [order,setorder] = useState({})
    const {user} = useAuth();

    useEffect(()=>{
        const url = `http://localhost:5000/Collection/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setorder(data))
    },[])

  const handlePlaceOrder = ()=>{
      const data = order;
      data.email = user.email;
      console.log(order)
      alert('Your order taken,Thanks for your order')
      fetch('http://localhost:5000/order',{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data),
        })
        
  }
 
    
    return (
        <div>
           <Container className="shippingInfo">
               <h2>Shipping Information</h2>
               <Row>
                   <Col>
                   <img src={order.image} alt="" />
                   </Col>
                   <Col>
                   <div className="orderForm">
                   <form >
                        <label >Product Name :</label>
                        <input type="text" value={order.title || ''} /> <br />
                        
                        <label >Product Details :</label>
                        <input type="text" value={order.Details || ''} /> <br />

                        <label >Costomer Email :</label>
                        <input type="text" value={user.email || ''} /> <br />

                        <label >Product Price : </label>
                        <input type="text" value={order.price || ''} /> <br />

                             <label >Address :</label> <br />
                            <textarea  name="textarea" id="" cols="30" rows="3"></textarea>

                            <br />
                        
                      <Button onClick={handlePlaceOrder}>Place Order</Button>
                       

                   </form>

                   </div>
                   
                   </Col>
               </Row>
           </Container>
        </div>
    );
};

export default Order;