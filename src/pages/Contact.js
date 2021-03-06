import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'
import NavbarComp from '../components/NavbarComp'
import '../stylesheets/audit.css'

const Contact = () => {

    const refForm = useRef();

    const [name, setName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('')
  
    const navigate = useNavigate()

    const sendEmail = () => {
      emailjs.sendForm(
        'service_xaf860a',
        'template_dxdzqcq',
        refForm.current,
        'bFjBQZTv1rdYmvISq'
    ).then(
        () => {
            toast.success('Message succesfully sent!')
            navigate('/')
        },
        () =>{
            toast.error("Failed to send the message, please try again.")
        }
    )
    }

    const submit = () => {
        if(name.length === 0){
          toast.error("Please enter your name!")
        }else if(email.length === 0){
          toast.error("Please enter email!")
        }else if(city.length === 0){
          toast.error("Please enter city/town!")
        }else if(phone.length === 0){
          toast.error("Please your mobile number!")
        }else if(message.length === 0){
          toast.error("Please enter a message!")
        }else{
          sendEmail();
        }
      }


  return (
    <div style={{backgroundColor:'black'}}>
    <NavbarComp />
    <div className='top' style={{backgroundColor:'white', paddingBottom:'30px'}}>
        <Container>
            <Row>
                <h1 style={{fontSize:'60px', fontWeight:'bold'}}>Get in touch.</h1>
                <h3>A step towards success</h3>
            </Row>
        </Container>
    </div>
    <div style={{backgroundColor:'#f5f8fb'}}>
    <Container>
        <Row>
            <Row style={{marginTop:'50px'}}>
            <Col md={6} sm={12}>
                  <Form ref={refForm}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name*</Form.Label>
                            <Form.Control onChange={(event) => {
                              setName(event.target.value)
                            }} type="text" name='name' placeholder="Your Name" />
                        </Form.Group> 
                        <Form.Group className="mb-3" controlId="formBasicCompany">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control onChange={(event) => {
                              setCompanyName(event.target.value)
                            }} type="text" name='companyName' placeholder="Company Name" />
                        </Form.Group> 
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control onChange={(event) => {
                              setEmail(event.target.value)
                            }} type="text" name='email' placeholder="Your email address" />
                        </Form.Group> 
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Mobile Number*</Form.Label>
                            <Form.Control onChange={(event) => {
                              setPhone(event.target.value)
                            }} type="text" name='mobileNumber' placeholder="Mobile Number" />
                        </Form.Group> 
                        <Form.Group className="mb-3" controlId="formBasicCity">
                            <Form.Label>City/Town*</Form.Label>
                            <Form.Control onChange={(event) => {
                              setCity(event.target.value)
                            }} type="text" name='city' placeholder="City/Town" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message*</Form.Label>
                            <Form.Control as='textarea' onChange={(event) => {
                              setMessage(event.target.value)
                            }}  name='message' placeholder="Enter your message" />
                        </Form.Group>
                    </Form> 
            </Col>
            <Col md={6} sm={12}>    
            </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={submit} style={{fontSize:'15px', borderRadius:'0',marginTop:'20px', marginBottom:'50px'}} size='lg' variant="outline-dark">SUBMIT</Button>{' '}
                </Col>
                <Col>

                </Col>
            </Row>
        </Row>
        </Container>
        </div>
        <Footer />
</div>
  )
}

export default Contact