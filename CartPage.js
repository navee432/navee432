import React, { useContext } from 'react';
import { cartcontext } from '../App';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import './CartPage.css';

function CartPage() {
  const { cart, dispatch } = useContext(cartcontext); // Use cartcontext here

  const removeFromCart = (id) => {
    dispatch({ type: 'removefromcart', id });
  };

  return (
    <Container>
      <h1 className="cart-title">Your Cart</h1>
      {cart.length > 0 ? (
        <Row>
          {cart.map((product) => (
            <Col sm={12} md={6} lg={4} key={product.id} className="mb-4">
              <Card className="cart-card">
                <Card.Img variant="top" src={product.image} className="cart-img" />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Card.Text>Category:{product.category}</Card.Text>
                  <Button variant="danger" onClick={() => removeFromCart(product.id)}>
                    Remove from Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </Container>
  );
}

export default CartPage;
