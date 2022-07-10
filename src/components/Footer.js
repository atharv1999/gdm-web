import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { IoMdMail } from 'react-icons/io'
import { FaLocationArrow, FaLinkedinIn, FaFacebookF, FaTwitter, FaPhoneAlt } from 'react-icons/fa'


const Footer = () => {

  return (
    <div className="container">
        <footer>
            <Row style={{marginTop:'100px', paddingBottom:'70px'}}>

                <Col md={6} sm={12}>
                    <Row>
                        <Col md={3} sm={12}><h3 style={{fontSize:'25px'}}><a style={{ color:'white'}} href='#home' className="nav-link p-0">About us</a></h3></Col>
                        <Col md={3} sm={12}><h3 style={{fontSize:'25px'}}><a style={{ color:'white'}} href='#home' className="nav-link p-0">Career</a></h3></Col>
                        <Col md={3} sm={12}><h3 style={{fontSize:'25px'}}><a style={{ color:'white'}} href='#home' className="nav-link p-0">Contact</a></h3></Col>
                        <Col md={3} sm={12}><h3 style={{fontSize:'25px'}}><a style={{ color:'white'}} href='#home' className="nav-link p-0">Services</a></h3></Col>

                        <Col md={6} style={{marginTop:'50px'}} sm={12}>
                            <h4 style={{color:'white'}}>Gaurav D. Murkute & Co.</h4>
                            <p className="text-muted">© 2022</p>
                        </Col>
                    </Row>
                    <hr style={{color:'white'}} />
                    <Row style={{marginBottom:'20px'}}>
                        <Col xs={1}><a href='https://www.linkedin.com'><Button style={{ border:'none'}} size='lg' variant="outline-light"><FaLinkedinIn /></Button>{' '}</a></Col>
                        <Col xs={1}><a href='https://www.facebook.com'><Button style={{ border:'none'}} size='lg' variant="outline-light"><FaFacebookF /></Button>{' '}</a></Col>
                        <Col xs={1}><a href='https://www.twitter.com'><Button style={{ border:'none'}} size='lg' variant="outline-light"><FaTwitter /></Button>{' '}</a></Col> 
                    </Row>
                </Col>
                <Col md={3} sm={12}></Col>
                <Col md={3} sm={12}>
                    <h5 style={{color:'white', fontSize:'25px'}}>Address</h5>
                    <ul class="nav flex-column">
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2"> </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2"><FaLocationArrow /> : 22, Seet Ganga,</li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2">Ramkrishna Nagar,</li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2">Makhmalabaad,</li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2">Nashik-422003, India</li>
                        <li>
                        
                        </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}}>
                            <IoMdMail    /> : <a style={{ color:'grey', textDecoration:'none'}} href='mailto:gauravdmurkute@gmail.com'>contact@gdmco.com</a>
                        </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}}>
                            <FaPhoneAlt /> : +918779642945
                        </li>
                    </ul>
                </Col>

            </Row>
        </footer>
    </div>
  )
}

export default Footer