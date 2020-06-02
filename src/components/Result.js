import React from 'react'
import { Container, CardBody, Card, Progress, Badge } from 'reactstrap'
import { connect } from 'react-redux'

class Result extends React.Component {   
    render() {
        const { questions, id, authedUser } = this.props
        const { optionOne, optionTwo } = questions[id]

        // Total number of answers
        const TotalLength = questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length
        // number of answers
        const answerOne = questions[id].optionOne.votes.length
        const answerTwo = questions[id].optionTwo.votes.length
        const progressOfOne =  answerOne === '0' ? '0' : (answerOne / TotalLength) * 100
        const progressOfTwo =  100 - progressOfOne
        console.log(progressOfOne, progressOfTwo)
        return(
            <div>
                <Container>
                    <Card>
                        <CardBody>
                            <h5>Would you Rather  {questions[id].optionOne.text}{optionOne.votes.includes(authedUser) && <Badge color='warning'>Your Vote</Badge>}</h5>
                            <Progress value={progressOfOne}>{progressOfOne}%</Progress>
                            <p><strong>{answerOne + ' out of ' + TotalLength} Votes</strong></p>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <h5>Would you Rather  {questions[id].optionTwo.text}{optionTwo.votes.includes(authedUser) && <Badge color='warning'>Your Vote</Badge>}</h5>
                            <Progress value={progressOfTwo}>{progressOfTwo}%</Progress>
                            <p><strong>{answerTwo + ' out of ' + TotalLength} Votes</strong></p>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
    return {
        id,
        authedUser,
        questions,
        users
    }
}

export default connect(mapStateToProps)(Result)