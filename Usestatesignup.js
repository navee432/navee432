import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Form,Card, CardBody, Row, Col } from 'react-bootstrap';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import './Signup.css';

  // Add GoogleSignInButton

function Usestatesignup() {
  let [signup, setSignup] = useState({ username: '', mobileno: '', emailID: '', password: '', confirmpassword: '' });
  let navigate = useNavigate();

  let schema = yup.object().shape({
    username: yup.string().required('Name is required'),
    mobileno: yup
      .string()
      .matches(/^\d{10}$/, 'Enter a valid 10-digit mobile number')
      .required('Mobile number is required'),
    emailID: yup.string().email('Invalid email').required('Email is required'),
    password: yup
    .string()
    .required('Password is required')
    .min(3, 'Password must be at least 3 characters long')
    .matches(/^[A-Za-z0-9]+$/, 'Password cannot include symbols'),
    confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  let handleInput = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  let handleSubmit = () => {
    console.log('Signup details:', signup);
    alert(`Signup successful`);
    sessionStorage.setItem('signupDetails', JSON.stringify(signup));
    navigate('/Usestatelogin');
  };

  return (
    <div className='bg'>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <Card className='card' >
            <CardBody >
              <Formik
                initialValues={signup}
                validationSchema={schema}
                onSubmit={handleSubmit}
              >
                {({ handleChange, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formUsername">
                      <Form.Label className='form-label12' >Username</Form.Label>
                      <Form.Control type="text" placeholder="Name" name="username"
                        value={signup.username} onChange={(e) => { handleInput(e); handleChange(e); }} className='form-control12' />
                      <ErrorMessage name="username" component="div" className="textfield" />
                    </Form.Group>
                       
                    <Form.Group className="mb-3" controlId="formMobileno">
                      <Form.Label className="form-label12">Mobile No</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Mobile number"
                        name="mobileno"
                        value={signup.mobileno}
                        onChange={(e) => {
                          handleInput(e);
                          handleChange(e);
                        }}
                        className="form-control12"
                      />
                      <ErrorMessage name="mobileno" component="div" className="textfield" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmailID">
                      <Form.Label className="form-label12">Email address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Email"
                        name="emailID"
                        value={signup.emailID}
                        onChange={(e) => {
                          handleInput(e);
                          handleChange(e);
                        }}
                        className="form-control12"
                      />
                      <ErrorMessage name="emailID" component="div" className="textfield" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label className="form-label12">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={signup.password}
                        onChange={(e) => { handleInput(e); handleChange(e); }}
                        className="form-control12"
                      />
                      <ErrorMessage name="password" component="div" className="textfield" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                      <Form.Label className="form-label12">Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmpassword"
                        value={signup.confirmpassword}
                        onChange={(e) => {
                          handleInput(e);
                          handleChange(e);
                        }}
                        className="form-control12"
                      />
                      <ErrorMessage name="confirmpassword" component="div" className="textfield" />
                    </Form.Group>
                    <button type="submit" className="btn btn-success">Sign Up</button>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
        </Col>
        <Col sm={1}></Col>
      </Row>
    </div>
  );
}

export default Usestatesignup;
