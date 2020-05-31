import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'

class List extends React.Component { 
    render() {

        const { uid, questions, users } = this.props
        console.log(uid)
        return(
            <div>
                <Card>
                    <CardHeader> {questions[uid].author} asks:</CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs='4'>
                                <img  width="100%" src="/assets/318x180.svg" alt='ss' />                           
                            </Col>
                            <Col>
                                <CardTitle className='bold'>Would you Rather</CardTitle>
                                <CardText>{questions[uid].optionOne.text}</CardText>
                                <Button color='success' block>View Poll</Button> 
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