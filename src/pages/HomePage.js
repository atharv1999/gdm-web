import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import NavbarComp from '../components/NavbarComp'
import Footer from '../components/Footer'
import '../components/universal.css'
import home from '../assets/images/home.jpg'
import office from '../assets/images/office.jpg'
import Deliver from '../components/Deliver'

const HomePage = () => {

    const styles = {
        row:{
            backgroundImage: `url( ${home} )`, 
            backgroundRepeat:'no-repeat', 
            backgroundSize:'100% 100%'
        }
    }

  return (
    <div style={{backgroundColor:'black',overflowX:'hidden'}}>
        <NavbarComp />
        <div>
            <Row style={styles.row}>
                <Col>
                    <Container>
                        <div>
                        <h1 style={{marginTop:'250px',color:'white',  fontSize:'80px' }}>We rise by </h1>
                        <h1 style={{marginBottom:'10px',color:'white', fontSize:'80px'}}>lifting others</h1>
                        <h3 style={{marginBottom:'25px',color:'white'}}>
                        Striving hard to make a positive impact
                        </h3>
                        <Button style={{fontSize:'15px',marginTop:'25px',marginBottom:'250px', borderRadius:'0'}} size='lg' variant="outline-light">MORE ABOUT US</Button>{' '}
                        </div>
                    </Container>
                </Col>
            </Row>
            <div style={{backgroundColor:'#2C3639'}}>
            <Container>
            <Row>
                <Row style={{marginTop:'120px'}}>
                <Col md={6} sm={12}>
                        <h1 style={{color:'white',  fontSize:'55px', fontFamily:'Varela Round, sans-serif'}}>
                        Practical support for businesses of all sizes, at every state of growth
                        </h1>
                        <p style={{marginTop:'30px',marginBottom:'10px',color:'white', fontSize:'22px'}}>
                        It's not just the biggest businesses that benefit from strategic advice, modern accounting technology and efficient financial functions. In the age of cloud accountancy, why shouldn't SME's take advantage too?
                        </p>
                        
                        
                </Col>
                <Col md={6} sm={12}>
                    <img style={{maxWidth:'100%',height:'auto', borderRadius:'20px'}} src={office} alt='readmore'/>
                </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Button style={{fontSize:'15px', borderRadius:'0',marginTop:'20px', marginBottom:'50px'}} size='lg' variant="outline-light">READ MORE</Button>{' '}
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Row>
            </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>

                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    </Row>
                </Container>
            </div>
        </div>
        <Deliver />
        <Footer />
    </div>
  )
}

export default HomePage