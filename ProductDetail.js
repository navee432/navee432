import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { cartcontext } from '../App';
import './Productdtail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, dispatch } = useContext(cartcontext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log("Error fetching product", err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const addtocart = (product) => {
    dispatch({ type: 'addtocart', product }); // Ensure action type is consistent
    navigate('/cartPage');  // Redirect to cart page after adding
  };

  return (
    <div>
      <h1 className='prodtitle'>{product.title}</h1>
      <Row>
        <Col sm={6}>
          <Container className='cont'>
            <img className='pro-img' src={product.image} alt={product.title} style={{ width: '200px' }} />
          </Container>
          <p className='prodes'>{product.description}</p>
        </Col>
        <Col sm={6}>
       
          <p className='propri'>Price: ${product.price}</p>
          <p className='categ'>Category: {product.category}</p>
          
          <Button onClick={() => addtocart(product)} className='addtocart'>Add to Cart</Button>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetail;
