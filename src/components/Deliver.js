import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Deliver = () => {

    const deliverables = [
        {
            id:1,
            imgUrl:'problem-solving.png',
            title:'Resolving complex issues',
            description:'Solutions to resolve complex strategic, tax and operational issues covering all sectors including manufacturing, mining, services and financial sectors.'
        },
        {
            id:2,
            imgUrl:'search.png',
            title:'Identifying High Risk',
            description:'Identification of high-risk areas & advice on risk mitigation.'
        },
        {
            id:3,
            imgUrl:'skills.png',
            title:'Our Audit Approach',
            description:'Risk based audit approach leads to timely identification and resolution of issues.'
        },
        {
            id:4,
            imgUrl:'caution.png',
            title:'Prevention & Detection',
            description:'Assessing the requirements for proper documentation as well as prevention and detection of frauds, errors, abuse & leakages.'
        },
        {
            id:5,
            imgUrl:'accounts.png',
            title:'Best Practices & Reporting',
            description:'Advising on better practices as well as accounting & financial reporting challenges including compliances to Accounting Standards.'
        },
        {
            id:6,
            imgUrl:'growth.png',
            title:'Future Growth Mindset',
            description:'Determining areas where synergy is there for future growth & suggest probable future areas for expansion.'
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
                <Col style={{textAlign:'center'}}>
                <Button as={Link} to='/contact' style={{fontSize:'15px', borderRadius:'0',marginTop:'20px', marginBottom:'50px' }} size='lg' variant="dark">GET IN TOUCH</Button>{' '}
                </Col>
                <Col></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Deliver