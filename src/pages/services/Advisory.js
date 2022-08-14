import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import people from '../../assets/images/people-advisory.jpg'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/NavbarComp'
import '../../stylesheets/audit.css'
import { Link } from 'react-router-dom'

const Advisory = () => {
  return (
    <div style={{backgroundColor:'black'}}>
    <NavbarComp />
    <div className='top' style={{backgroundColor:'white', paddingBottom:'30px'}}>
        <Container>
            <Row>
                <h1 style={{fontSize:'60px', fontWeight:'bold'}}>Transaction Advisory</h1>
                {/* <h3>An authentic, ethical and beneficial approach</h3> */}
            </Row>
        </Container>
    </div>
    <div style={{backgroundColor:'#f5f8fb'}}>
    <Container>
        <Row>
            <Row style={{marginTop:'50px'}}>
            <Col md={6} sm={12}>
                    <p style={{marginTop:'10px',marginBottom:'30px',fontSize:'22px',paddingRight:'50px',textAlign: 'justify'}}>
                        In an era of heightened economic and industrial growth in diverse sectors, transactions involve high stakes. We believe that a successful transaction is the result of a well thought-out process that requires a thorough understanding of the commercial, regulatory and tax implications. Our focus is to handhold our clients through the entire transaction process. We follow a systematic approach to deliver optimum value to our clients through support at all steps of a transaction.
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

export default Advisory