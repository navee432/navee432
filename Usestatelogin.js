import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, CardBody, Row } from 'react-bootstrap';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import './Login.css';

  

function Usestatelogin() {
  let [login, setLogin] = useState({ username: '', password: '' });
  let navigate = useNavigate();

  useEffect(() => {
    let storedSignupDetails = JSON.parse(sessionStorage.getItem('signupDetails'));
    if (storedSignupDetails) {
      setLogin({ username: storedSignupDetails.username, password: '' });
    }
  }, []);

  let schema = yup.object().shape({
    username: yup.string().required('Enter the username'),
    password: yup.string().min(3, 'Password should be correct').required('Password is required')
  });

  let handleInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  let handleSubmit = () => {
    let storedSignupDetails = JSON.parse(sessionStorage.getItem('signupDetails'));
    if (login.username === storedSignupDetails?.username && login.password === storedSignupDetails?.password) {
      sessionStorage.setItem('logInUser', login.username);
      alert(`Login successful`);
      navigate('/Homepage');
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div className='bg'>
      <Row>
        <Card className='lc'>
          <CardBody className='card-body11'>
            <Formik
              initialValues={login}
              validationSchema={schema}
              onSubmit={handleSubmit}
              enableReinitialize={true}
            >
              {({ handleChange, handleSubmit }) => (
         <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUsername">
           <Form.Label className='label11'>Username</Form.Label>
           <Form.Control type="text" placeholder="Enter the username" name="username"
             value={login.username} onChange={(e) => { handleInput(e); handleChange(e); }} className='input11' />
           <ErrorMessage name="username" component="div" className="loginfield" />
          </Form.Group>
      <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label className='label11'>password</Form.Label>
         <Form.Control type="password" placeholder="Enter the password" name="password"
             value={login.password} onChange={(e) => { handleInput(e); handleChange(e); }} className='input11' />
            <ErrorMessage name="password" component="div"  />
         </Form.Group>
           <button type='submit' className="btn btn-info">LOGIN</button>
                </Form>
              )}
              
            </Formik>
          </CardBody>
        </Card>
      </Row>
    </div>
  );
}

export default Usestatelogin;
