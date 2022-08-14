import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'
import NavbarComp from '../components/NavbarComp'
import '../stylesheets/audit.css'

import { IoMdMail } from 'react-icons/io'
import { FaLocationArrow, FaLinkedinIn, FaFacebookF, FaTwitter, FaPhoneAlt } from 'react-icons/fa'

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
                            <Form.Control as='textarea' style={{height:'150px'}} onChange={(event) => {
                              setMessage(event.target.value)
                            }}  name='message' placeholder="Enter your message" />
                        </Form.Group>
                    </Form> 
                    <Button onClick={submit} style={{fontSize:'15px', borderRadius:'0',marginTop:'20px', marginBottom:'50px'}} size='lg' variant="outline-dark">SUBMIT</Button>{' '}
            </Col>
            
            <Col md={3} sm={12}></Col>
            <Col md={3} sm={12}>
                <h1 style={{marginBottom:'25px'}}>Our Office</h1>
                <Row>
                  <Col sm={12}>
                    <ul class="nav flex-column">
                        <li style={{fontSize:'25px',
                            fontWeight:'400'}} class="nav-item mb-2">Pune</li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2"><FaLocationArrow /> : Office-3, Aditya Centeegra, </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2">Dnyaneshwar Paduka Chowk, </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2">FC Road, Pune.</li>
                        <li>
                        
                        </li>
                        {/* <li style={{color:'grey',
                            fontWeight:'400'}}>
                            <IoMdMail    /> : <a style={{ color:'grey', textDecoration:'none'}} href='mailto:gauravdmurkute@gmail.com'>info@hgmllp.com</a>
                        </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}}>
                            <FaPhoneAlt /> : +918779642945
                        </li> */}
                    </ul>
                  </Col>
                </Row>
                <Row>
                <Col sm={12}>
                    <ul class="nav flex-column">
                        <li style={{fontSize:'25px',
                            fontWeight:'400'}} class="nav-item mb-2">Nashik</li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2"><FaLocationArrow /> : 11, Aniket resi., Savarkar</li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2">Nagar, Gangapur Road, </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2">Makhmalabaad,</li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2">Nashik.</li>
                        <li>
                        
                        </li>
                        {/* <li style={{color:'grey',
                            fontWeight:'400'}}>
                            <IoMdMail    /> : <a style={{ color:'grey', textDecoration:'none'}} href='mailto:gauravdmurkute@gmail.com'>info@hgmllp.com</a>
                        </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}}>
                            <FaPhoneAlt /> : +918779642945
                        </li> */}
                    </ul>
                  </Col>
                </Row>
                <Row>
                <Col sm={12} style={{marginTop:'20px'}}>
                <IoMdMail/> : <a style={{ color:'grey', textDecoration:'none'}} href='mailto:gauravdmurkute@gmail.com'>info@hgmllp.com</a>
                </Col>
                </Row>
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