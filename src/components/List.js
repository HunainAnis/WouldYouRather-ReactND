import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class List extends React.Component { 
    render() {
        const { uid, questions, users } = this.props
        return(
                <div>
                    <Card>
                        <CardHeader> {questions[uid].author} asks:</CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs='4'>
                                    <img  width="100%" src={users[questions[uid].author].avatarURL} alt='ss' />                           
                                </Col>
                                <Col>
                                    <CardTitle className='bold'><strong>Would you Rather</strong></CardTitle>
                                    <CardText>{questions[uid].optionOne.text}</CardText>
                                    <Link to={`Questions/${uid}`}>
                                        <Button color='success' block>View Poll</Button> 
                                    </Link>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </div>
        )
    }
}

function mapStateToProps({ questions, users },{ uid }) {
    return {
        questions,
        users,
        uid
    }
}

export default connect(mapStateToProps)(List)