import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { app } from '../firebaseConfig';
import { auth,provider } from '../firebaseConfig';

function GoogleAuthentication() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        console.log("Google Signed In User: ", user);
        alert('Google Sign-In successful!');
        navigate('/Homepage');
      })
      .catch((error) => {
        console.error("Google Sign-In Error", error.code, error.message);
        alert(`Google Sign-In failed. Error: ${error.message}`);
      });
  };
  
  

  // Function to navigate to the Signup page
  const handleSignupClick = () => {
    navigate('/Usestatesignup');
  };

  // Function to navigate to the Login page
  const handleLoginClick = () => {
    navigate('/Usestatelogin');
  };

  return (
    <div className="google-auth-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Row>
        <Col sm={12}>
          <Card style={{ width: '25rem', padding: '20px', textAlign: 'center' }}>
            <h3>Google Authentication</h3>
            <Card.Body>
              {/* Google Sign-In Button */}
              <Button variant="primary" onClick={handleGoogleSignIn} style={{ marginBottom: '10px', width: '100%' }}>
                Sign in with Google
              </Button>
              
              {/* Sign Up Button */}
              <Button variant="success" onClick={handleSignupClick} style={{ marginBottom: '10px', width: '100%' }}>
                Sign Up
              </Button>
              
              {/* Login Button */}
              <Button variant="info" onClick={handleLoginClick} style={{ width: '100%' }}>
                Login
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GoogleAuthentication;
