import React from 'react'
import { CardTitle, Button, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'

class UnAnswered extends React.Component {

    state={
        answer:null
    }

    handleChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit() {
        const { dispatch, authedUser, uid } = this.props
        const { answer } = this.state
        return(
            dispatch(handleSaveAnswer( authedUser, uid, answer ))

        )
    }

    render() {
        const { uid, questions } = this.props
        return(
            <div>
                <CardTitle className='bold'><strong>Would you Rather...</strong></CardTitle>
                <div>
                    <Label>
                        <Input 
                            type='radio' 
                            value='optionOne' 
                            checked={this.state.answer === 'optionOne'} 
                            name='answer'
                            onChange={(e)=>this.handleChange(e)}
                            /> {questions[uid].optionOne.text}
                    </Label>
                </div>
                <Label>
                    <Input 
                        type='radio' 
                        value='optionTwo' 
                        checked={this.state.answer === 'optionTwo'} 
                        name='answer'
                        onChange={(e)=>this.handleChange(e)}
                        /> {questions[uid].optionTwo.text}
                </Label>
                <Button 
                    onClick={() => this.handleSubmit() } 
                    color='success' 
                    block
                    disabled={this.state.answer === null}
                >
                    Submit</Button> 
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions }, {uid}) {
    return {
        authedUser,
        questions,
        uid
    }
}

export default connect(mapStateToProps)(UnAnswered)