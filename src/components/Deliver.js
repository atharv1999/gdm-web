import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Deliver = () => {

    const deliverables = [
        {
            id:1,
            imgUrl:'caution.png',
            title:'Assessing high risk situations',
            description:'A risk mitigation plan is developed after identifying areas at high risk.'
        },
        {
            id:2,
            imgUrl:'skills.png',
            title:'Methodology for auditing',
            description:'An audit based on risk identification and resolves problem in a timely manner.'
        },
        {
            id:3,
            imgUrl:'resolved.png',
            title:'Resolving complex problems',
            description:'A wide range of solutions to complex strategic, tax and operational issues for all sectors including manufacturing, real estate and services as well as for the financial sector.'
        },
        {
            id:4,
            imgUrl:'reviews.jpeg',
            title:'Reviews and Recommendations',
            description:'Assisting with best practices and accounting & financial reporting challenges, as well as complying with relevant accounting standards.'
        },
        {
            id:5,
            imgUrl:'growth.png',
            title:'Thinking in terms of future growth',
            description:'Analyzing future growth synergies and suggesting probable expansion areas.'
        },
        {
            id:6,
            imgUrl:'problem-solving.png',
            title:'Innovation',
            description:'We promote innovative thinking and reward initiatives to explore best practices and develop comprehensive solutions to business challenges.'
        }
    ]

  return (
    <div style={{backgroundColor:'white',padding:'50px 0 50px 0'}}>
        <Container>
            <h1 style={{fontSize:'55px', textAlign:'center'}}>What We Deliver</h1>
            <Row style={{marginTop:'50px'}}>
                {deliverables.map((section) => {
                    return <Col style={{padding:'35px'}} key={deliverables.id} md={4} sm={12}>
                    <img style={{width:'70px', height:'70px',marginBottom:'15px'}} src={require('../assets/images/' + section.imgUrl)} alt='deliverables'></img>
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                </Col>
                })}
            </Row>
            <Row>
                <Col></Col>
                <Col sm={12} style={{textAlign:'center'}}>
                <Button as={Link} to='/contact' style={{fontSize:'15px', borderRadius:'0',marginTop:'20px', marginBottom:'50px' }} size='lg' variant="dark">GET IN TOUCH</Button>{' '}
                </Col>
                <Col></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Deliver