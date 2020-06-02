import React from 'react'
import { Card, CardHeader, CardBody, Row, Col, CardTitle, Button, Container, CardSubtitle, Input, Form } from 'reactstrap'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class CreateQuestion extends React.Component {

    state={
        optionOne:'',
        optionTwo:''
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit() {
        const { dispatch, authedUser } = this.props
        const { optionOne, optionTwo } = this.state
        dispatch(handleSaveQuestion(optionOne, optionTwo, authedUser))
        console.log(optionOne, optionTwo, authedUser)
        this.setState({optionOne:'', optionTwo:''})
        this.props.history.push('/')
    }

    render() {
        // console.log(this.props)
        if(this.props.authedUser === null) {
            return <Redirect to='/' />
        }
        return(
            <div>
                <Container>
                    <Card>
                        <CardHeader><strong><h1 style={{textAlign: 'center'}}>Create New Question</h1></strong></CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <CardTitle className='bold'>Complete the Question</CardTitle>
                                    <CardSubtitle><strong>Would you Rather...</strong></CardSubtitle>
                                    <Form>
                                        <Input onChange={(e)=>this.handleChange(e)} value={this.state.optionOne} name='optionOne' placeholder='First Option' type='text' />
                                        <h6 style={{textAlign: 'center'}}>or</h6>
                                        <Input onChange={(e)=>this.handleChange(e)} value={this.state.optionTwo} name='optionTwo' placeholder='Second Option' type='text' />
                                        <hr/>
                                        <Button 
                                            onClick={()=>this.handleSubmit()}
                                            color='success' 
                                            block
                                            disabled={this.state.optionOne !== '' && this.state.optionTwo !== '' ? false : true}
                                        >
                                            Submit Question</Button>
                                    </Form>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return{
        authedUser
    }
}

export default connect(mapStateToProps)(CreateQuestion)