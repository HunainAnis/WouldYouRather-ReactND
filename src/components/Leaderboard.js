import React from 'react'
import { connect } from 'react-redux'
import { Container, Card, Row, Col, CardHeader, CardBody } from 'reactstrap'


const Leaders = (props) => {
    const { users, answers, questions, avatar, id } = props
    return(
        <div>
            <Card>
                <Row>
                    <Col xs={3}>
                        <CardBody>
                            <img style={{marginLeft:'auto', marginRight:'auto', display:'block'}} width='50%' src={avatar} alt='user avatar' />
                        </CardBody>
                    </Col>
                    <Col>
                        <CardBody>
                            <h4>{ users[id].name }</h4>
                            <p>Answered questions {answers}</p>
                            <hr />
                            <p>Created questions {questions}</p>
                        </CardBody>
                    </Col>
                    <Col xs={3}>
                        <CardBody>
                            <Card>
                                <CardHeader style={{textAlign: 'center'}}>Score</CardHeader>
                                <CardBody>
                                    <h1 style={{textAlign: 'center'}}>{answers + questions}</h1>
                                </CardBody>
                            </Card>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

class Leaderboard extends React.Component {
    render() {
        const { users } = this.props
        const userList = Object.keys(users)
        const userArray = userList.map(user => ({
            userId: user,
            userQuestions: users[user].questions.length,
            userAnswers: Object.keys(users[user].answers).length,
            avatarUrl:users[user].avatarURL
        }))
        return(
            <div>
                <Container>
                    {
                        userArray.map(i=>(
                            <Leaders
                                key={i.userId}
                                id={i.userId}
                                answers={i.userAnswers} 
                                questions={i.userQuestions} 
                                users={users}
                                avatar={i.avatarUrl}
                             />
                        ))
                    }
                </Container>
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    return{
        users,
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(Leaderboard)