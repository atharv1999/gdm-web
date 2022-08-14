import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import person from '../../assets/images/person-laptop.jpg'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/NavbarComp'
import '../../stylesheets/audit.css'
import { Link } from 'react-router-dom'

const Audit = () => {
  return (
    <div style={{backgroundColor:'black'}}>
        <NavbarComp />
        <div className='top' style={{backgroundColor:'white', paddingBottom:'30px'}}>
            <Container>
                <Row>
                    <h1 style={{fontSize:'60px', fontWeight:'bold'}}>Audit & Assurance</h1>
                    {/* <h3>Aspire with assurance</h3> */}
                </Row>
            </Container>
        </div>
        <div style={{backgroundColor:'#f5f8fb'}}>
        <Container>
            <Row>
                <Row style={{marginTop:'50px'}}>
                <Col md={6} sm={12}>
                        <p style={{marginTop:'10px',marginBottom:'30px',fontSize:'22px',paddingRight:'50px',textAlign: 'justify'}}>
                        The purpose of an audit goes far beyond the numbers. It’s about attesting to accomplishments and challenges, helping to assure strong foundations for future aspirations. As your partner in change, we illuminate the what, how, and why, so you're always prepared to act.
                        </p>
                        <p style={{marginTop:'10px',marginBottom:'30px',fontSize:'22px',paddingRight:'50px',textAlign: 'justify'}}>
                        All our audits begin with a full assessment and understanding of the client's business and operations. This allows us to provide constructive suggestions for improving business strategies, management information and controls. Our examinations are based on statutory requirements and local auditing practices and our procedures comply with the Standards on Auditing.
                        </p>
                        <p style={{marginTop:'50px',marginBottom:'50px',fontSize:'22px',paddingRight:'50px',textAlign: 'justify'}}>
                            Explore tax and regulatory services
                        </p>
                        <ul style={{marginBottom:'50px', fontSize:'22px'}}>
                            <li>Statutory Audit</li>
                            <li>Tax Audit</li>
                            <li>Internal Audit</li>
                            <li>Certification</li>
                            <li>Management Audit</li>
                            <li>Compliance Audit</li>
                            <li>Operations Audit</li>
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

export default Audit