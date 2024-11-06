import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    const [products, setProducts] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products") 
            .then(res => {
                setProducts(res.data); 
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div>
            <Row>
          {products.map(item => (
         <Col sm={3} key={item.id}>
        <Card className='cardbox'>
          <Card.Img variant="top" src={item.image} className='pict' />
            <Card.Body>
           <Card.Title className='title'>{item.title}</Card.Title>
          <Card.Text className='price'>Price: ${item.price}</Card.Text>
          <Card.Text >Category: {item.category}</Card.Text>
           <Button onClick={() => navigate(`/ProductDetail/${item.id}`)}>View</Button>
          </Card.Body>
       </Card>
          </Col>
                ))}
            </Row>
        </div>
    );
}

export default Homepage;
