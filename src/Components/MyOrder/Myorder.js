import { Link } from 'react-router-dom';
import { Button, Card, Col,  Container,  Row } from 'react-bootstrap';
import '../Dashboard/dashboard.css'
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';




const Myorder = () => {
    const {logOut,admin} = useAuth();
    const [myorders,setmyorder] = useState([]);
    

    useEffect(()=>{
        fetch('http://localhost:5000/order')
        .then( res=> res.json())
        .then(data => setmyorder(data))
    },[])

    const cancelOrder = id =>{
        const confirm = window.confirm("Are you sure to cancel order")
 
        if(confirm){
         const   url = `http://localhost:5000/order/${id}`;
         fetch(url, {
             method:'DELETE'
         })
         .then(res => res.json())
         .then(data => {
             console.log(data)
             if(data.deletedCount){
               alert('Order Cancel Successfully')
                 const remaining = myorders.filter(service=> service._id !==id );
                 setmyorder(remaining);
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
                    <h5>My Order:</h5>
                </div>
                <div>
                <div className=" collctionCard">
            {
                myorders.map(myorder=>
                
                <div>
                    <Container>
                    <Card>
                        <Card.Img variant="top" src={myorder.image} />
                        <Card.Body>
                            <Card.Title>{myorder.title}</Card.Title>
                            <Card.Text>{myorder.Details}</Card.Text>
                            <Card.Title>Price: {myorder.price}</Card.Title>
                            <Button onClick={()=> cancelOrder(myorder._id)}>Cancel Order</Button>
                        </Card.Body>
                    </Card>
                    </Container>
                </div>
                
                )
            }
            </div>
                </div>
            </Col>
        </Row>
            
        </div>
    );
};

export default Myorder;