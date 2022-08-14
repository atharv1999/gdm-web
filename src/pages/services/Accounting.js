import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import people from '../../assets/images/people-work.jpg'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/NavbarComp'
import '../../stylesheets/audit.css'
import { Link } from 'react-router-dom'

const Accounting = () => {
  return (
    <div style={{backgroundColor:'black'}}>
        <NavbarComp />
        <div className='top' style={{backgroundColor:'white', paddingBottom:'30px'}}>
            <Container>
                <Row>
                    <h1 style={{fontSize:'60px', fontWeight:'bold'}}>Accounting and Business Support</h1>
                    {/* <h3>High standards ensure positive impact</h3> */}
                </Row>
            </Container>
        </div>
        <div style={{backgroundColor:'#f5f8fb'}}>
        <Container>
            <Row>
                <Row style={{marginTop:'50px'}}>
                <Col md={6} sm={12}>
                        <p style={{marginTop:'10px',marginBottom:'30px',fontSize:'22px',paddingRight:'50px',textAlign: 'justify'}}>
                            With the global economy in full swing, it is essential to have timely, reliable, and meaningful financial data available for making informed business decisions. Accounting records and bookkeeping are vital issues for all types of businesses to enable its owners, directors or management to be aware of all transactions conducted by the business and to be able to measure the degree of success of the business as a whole or of a particular aspect of it. In addition, maintaining adequate accounting records is essential for tax purposes. With us, accounting systems can work harder for management every day, boosting business success. Our services are tailored to meet the needs of clients.
                        </p>  
                </Col>
                <Col md={6} sm={12}>
                    <img style={{maxWidth:'100%',height:'auto', borderRadius:'20px'}} src={people} alt='readmore'/>
                </Col>
                </Row>
                <Row>
                    <Col>
                        <Button as={Link} to='/contact' style={{fontSize:'15px', borderRadius:'0',marginTop:'20px', marginBottom:'50px'}} size='lg' variant="outline-dark">CONTACT US</Button>{' '}
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

export default Accounting