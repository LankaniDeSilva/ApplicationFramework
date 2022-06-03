import React, { Component } from "react";
import { Button, Spinner ,CardImg,Card, Row, Col} from 'react-bootstrap';
import group from './images/group-img.png';
import marking from './images/marking-img.png';
import chat from './images/chat-img.png'; 
import topic from './images/topic-img.png';
import { Link } from "react-router-dom";
import evaluation from './images/evaluation.png';
const SupervisorHome = () => {
  return (

        <div  align="center" >
             <div align="right">
            <Button   as={Link} to={'/'} variant="danger">Logout</Button>
            </div>
            
            <p  className="welcome-txt">Welcome Back</p>
            {/*<div className="welcome-img">
                <img src={welcome} style={{height : '250px', width:'0px'}}/>
            </div>*/}
             
            <div className="card-container" >
           <center>
                <Row   className='row-cols-1 row-cols-md-5 g-4'>
                    <Col >
                    <Card style={{ width: '18rem',height: '22rem', border:' 2px solid red',radius:' 25px' }}>
  <Card.Img variant="top" src={group} />
  <Card.Body>
  <Button variant="primary" as={Link}
                                    to="/add-mark">
                                     Evaluate Documents
                                </Button>
  </Card.Body>
</Card>
                       
                    </Col>
                    {/* <Col>

                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={marking} />
  <Card.Body>
  <Button variant="primary" as={Link}
                                    to="/supervisor-eval">
                                    Evaluations
                                </Button> 
  </Card.Body>
</Card>
                 
                    </Col> */}

                    <Col>

                    <Card style={{ width: '18rem',height: '22rem' , border:' 2px solid red',radius:' 25px' }}>
  <Card.Img variant="top" src={chat} />
  <Card.Body>
  <Button variant="primary" as={Link} to={'/supervisor-chat'}>
                                   Chat with students
                                </Button>
  </Card.Body>
</Card>
                       
                    </Col>
                    <Col>

                    <Card style={{ width: '18rem',height: '22rem' , border:' 2px solid red',radius:' 25px' }}>
  <Card.Img variant="top" src={topic} style={{ width: '18rem',height: '222rem' }}/>
  <Card.Body>
  <Button variant="primary" as={Link}
                                    to="/supervisor-topic">
                                    View Topics and Accept
                                </Button>
  </Card.Body>
</Card>
                        
                    </Col>
                    <Col>

                    <Card style={{ width: '18rem',height: '22rem', border:' 2px solid red',radius:' 25px'  }}>
  <Card.Img variant="top" src={evaluation} style={{ width: '18rem',height: '22rem' }} />
  <Card.Body>
<Button variant="primary" as={Link} to={'/view-mark'}>
                                    View Marking Schemes
                                </Button>
  </Card.Body>
</Card>
                      
                    </Col>
                </Row>
                </center>
            </div>
            
           
        </div>
        
  )
}

export default SupervisorHome