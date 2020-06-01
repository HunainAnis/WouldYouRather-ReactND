import React from 'react'
import { Card, CardHeader, CardBody, Row, Col, CardTitle, CardText, Button, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'

class UnAnswered extends React.Component {
    render() {
        const { uid, questions, users, authedUser } = this.props
        return(
            <div>
                <Card>
                    <CardHeader> <strong>{questions[uid].author}</strong> asks:</CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs='4'>
                                <img  width="100%" src={users[questions[uid].author].avatarURL} alt='ss' />                           
                            </Col>
                            <Col style={{borderLeft:'2'}}>
                                <CardTitle className='bold'><strong>Would you Rather</strong></CardTitle>
                                <Label>
                                    <Input type='radio' name='answer' /> {questions[uid].optionOne.text}
                                </Label>
                                <hr />
                                <Label>
                                    <Input type='radio' name='answer' /> {questions[uid].optionTwo.text}
                                </Label>
                                    <Button color='success' block>Submit</Button> 
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser, questions }, {uid}) {
    return {
        users,
        authedUser,
        questions,
        uid
    }
}

export default connect(mapStateToProps)(UnAnswered)