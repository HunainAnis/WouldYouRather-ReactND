import React from 'react'
import { connect } from 'react-redux'
import { Container, CardHeader, Card, CardBody, Row, Col } from 'reactstrap'
import UnAnswered from './UnAnswered'
import { Redirect } from 'react-router-dom'
import Result from './Result'

class QuestionDetail extends React.Component {
    render() {
        const { id, authedUser, questions, users } = this.props
        if(authedUser=== null) {
            return <Redirect to='/' />
        }
        if(!Object.keys(questions).includes(this.props.match.params.id)) {
            return <Redirect to='/404' />
        }
        console.log(this.props)
        const checker = users[authedUser].answers[id] !== undefined
        return(
            <div>
                <Container>
                    <Card>
                        <CardHeader> <strong>{questions[id].author}</strong> asks:</CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs='4'>
                                    <img  width="100%" src={users[questions[id].author].avatarURL} alt='ss' />                           
                                </Col>
                                <Col style={{borderLeft:'2'}}>
                                    {
                                        checker ?
                                        <Result id={id} />
                                        :<UnAnswered uid={id} />
                                    }
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, props) {

    const { id } = props.match.params

    return {
        id,
        users,
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionDetail)