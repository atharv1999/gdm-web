import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import hbg from '../assets/images/Hbg_photo.jpg'
import gdm from '../assets/images/gdm_dp.jpg'
import office from '../assets/images/office_img.jpg'

import Footer from '../components/Footer'
import NavbarComp from '../components/NavbarComp'
import '../stylesheets/audit.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div style={{backgroundColor:'black'}}>
        <NavbarComp />
        <div className='top' style={{backgroundColor:'white', paddingBottom:'30px'}}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <h1 style={{fontSize:'60px', fontWeight:'bold', textAlign:'center'}}>Our Story.</h1>
                        <p style={{marginTop:'30px',marginBottom:'100px',fontSize:'20px',paddingRight:'50px',textAlign: 'justify'}}>Every great journey begins with a small step. We started our journey in the year 2022 under the strong leadership of Gaurav Murkute and Hrishikesh Gawali. ​We have offices in the vibrant city of Nashik, as well as in the city of Pune, known for its rich cultural heritage while having a cosmopolitan edge fueled by its thriving IT industry. ​As a multidisciplinary firm, we hire the skillful and best people with specializations that fit the firm's multidisciplinary services. ​We focus on auditing, taxation, financial advisory, due diligence, and management consulting as our core competencies. With HGM & Co LLP, you are assured of expert guidance in all legal, financial, managerial, and administrative facets of business.​ As we look forward to a brighter future, we are even more determined than ever to keep the legacy of faith, cooperation and unity alive!</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                    <img style={{maxWidth:'100%',height:'auto', borderRadius:'20px',marginBottom:'100px'}} src={office} alt='readmore'/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                    <h1 style={{fontSize:'60px', fontWeight:'bold', textAlign:'center'}}>Our Vision.</h1>
                        <p style={{marginTop:'30px',marginBottom:'100px',fontSize:'20px',paddingRight:'50px',textAlign: 'justify'}}>
                        We strive to establish ourselves as a nationally recognized leader in financial and professional services for high net worth individuals and businesses alike, providing a work environment where staff can thrive and grow in their careers.
                        </p>
                    
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                    <h1 style={{fontSize:'60px', fontWeight:'bold', textAlign:'center'}}>Our Mission.</h1>
                        <p style={{marginTop:'30px',marginBottom:'100px',fontSize:'20px',paddingRight:'50px',textAlign: 'justify'}}>
                        Our mission is to provide our clients with creative solutions that integrate people, processes and technology to facilitate the achievements of their strategic objectives and growth. Developing an enduring business relationship between firm team, partners and clients through trust and loyalty. Create an environment that fosters creative thinking, innovative ideas, develops skills across diverse disciplines and challenges staff to perform at their highest levels.
                        </p>
                    
                    </Col>
                </Row>
                <Row>
                    <h1 style={{fontSize:'60px', fontWeight:'bold'}}>Our Leadership.</h1>
                    {/* <h3>Aspire with assurance</h3> */}
                </Row>
            </Container>
        </div>
        <div style={{backgroundColor:'#f5f8fb'}}>
        <Container>
            <Row>
                <Row style={{marginTop:'50px'}}>
                <Col md={6} sm={12}>
                    <img style={{maxWidth:'70%',height:'auto', borderRadius:'20px'}} src={hbg} alt='readmore'/>
                </Col>
                <Col md={6} sm={12}>

                        <h1 style={{fontSize:'50px'}}>Hrishikesh B. Gawali</h1>
                        <h3 style={{fontSize:'30px',marginTop:'15px'}}>ACA, B.Com</h3>
                        <p style={{marginTop:'30px',marginBottom:'30px',fontSize:'20px',paddingRight:'50px',textAlign: 'justify'}}>
                        Hrishikesh Gawali is a qualified chartered accountant. Rather than joining a big organisation and being a small part of it, he decided to start his own and grow it with time. He gained a wide range of taxation, consulting, statutory audits, and internal auditing experience during his three-year articleship. As a result of his innovative solutions, strategic thinking, and work ethic, he built trust with his clients, ranging from individuals to corporations. His interests extend to management consulting and project financing, in addition to direct taxation and auditing. Since he believes that blockchain will be the future, he is keenly interested in digital assets. Besides it, he is also passionate about real estate. As a result of his interest in these areas, he keeps up-to-date on those areas.
                        </p>
                </Col>
                
                </Row>
                <Row style={{marginTop:'200px'}}>
                <Col md={6} sm={12}>
                    <img style={{maxWidth:'70%',height:'auto', borderRadius:'20px'}} src={gdm} alt='readmore'/>
                </Col>
                <Col md={6} sm={12}>

                        <h1 style={{fontSize:'50px'}}>Gaurav D. Murkute</h1>
                        <h3 style={{fontSize:'30px',marginTop:'15px'}}>ACA, B.Com</h3>
                        <p style={{marginTop:'30px',marginBottom:'30px',fontSize:'20px',paddingRight:'50px',textAlign: 'justify'}}>
                        Hrishikesh Gawali is a qualified chartered accountant. Rather than joining a big organisation and being a small part of it, he decided to start his own and grow it with time. He gained a wide range of taxation, consulting, statutory audits, and internal auditing experience during his three-year articleship. As a result of his innovative solutions, strategic thinking, and work ethic, he built trust with his clients, ranging from individuals to corporations. His interests extend to management consulting and project financing, in addition to direct taxation and auditing. Since he believes that blockchain will be the future, he is keenly interested in digital assets. Besides it, he is also passionate about real estate. As a result of his interest in these areas, he keeps up-to-date on those areas.
                        </p>
                </Col>
                
                </Row>
            </Row>
            </Container>
            </div>
            <Footer />
    </div>
  )
}

export default About