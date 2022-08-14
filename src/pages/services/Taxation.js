import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import person from '../../assets/images/person-calculator.jpg'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/NavbarComp'
import '../../stylesheets/audit.css'
import { Link } from 'react-router-dom'


const Taxation = () => {
  return (
    <div style={{backgroundColor:'black'}}>
        <NavbarComp />
        <div className='top' style={{backgroundColor:'white', paddingBottom:'30px'}}>
            <Container>
                <Row>
                    <h1 style={{fontSize:'60px', fontWeight:'bold'}}>Taxation</h1>
                    {/* <h3>Trusted. Transformational. Together.</h3> */}
                </Row>
            </Container>
        </div>
        <div style={{backgroundColor:'#f5f8fb'}}>
        <Container>
            <Row>
                <Row style={{marginTop:'50px'}}>
                <Col md={6} sm={12}>
                        <p style={{marginTop:'10px',marginBottom:'30px',fontSize:'22px',paddingRight:'50px',textAlign: 'justify'}}>
                            Attitudes to tax are changing. Organizations of all sizes are increasingly exposed to new trends in tax regulation.
                        </p>
                        <p style={{marginTop:'10px',marginBottom:'30px',fontSize:'22px',paddingRight:'50px',textAlign: 'justify'}}>
                            Enhancing a shareholder's value is a fundamental concept which drives every management effort in the modern business environment. Progressive and bottom-line focussed managements have realized that taxes (both direct and indirect), should be viewed as a dynamic item of cost rather than a passive charge on the profits. Indeed, an effective tax-cost management provides a distinct competitive advantage. In order to accomplish this, appropriate tax strategies need to be identified proactively and implemented surgically.</p>
                        <p style={{marginTop:'50px',marginBottom:'50px',fontSize:'22px',paddingRight:'50px',textAlign: 'justify'}}>
                            Explore tax and regulatory services
                        </p>
                        <ul style={{marginBottom:'50px', fontSize:'22px',textAlign: 'justify'}}>
                            <li>Tax Compliance and Diagnostic Review</li>
                            <li>Audit under Income Tax Laws and GST</li>
                            <li>Tax Optimization and Transaction Structuring</li>
                            <li>Obtaining registrations, approvals and licenses</li>
                            <li>Refund related assistance</li>
                            <li>Litigation and Representation services</li>
                            <li>Tax Returns and Hand-holding support</li>
                        </ul>
                </Col>
                <Col md={6} sm={12}>
                    <img style={{maxWidth:'100%',height:'auto', borderRadius:'20px'}} src={person} alt='readmore'/>
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

export default Taxation