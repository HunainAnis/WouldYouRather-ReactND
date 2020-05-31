import React from 'react'
import { Container, Card, CardHeader, CardBody, Button } from 'reactstrap'
import reactlogo from '../pngguru.com.png'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {  
    state={
        authedUser : null,
        toHome: false
    }
    
    handleChange(e) {
        const userid = e.target.value
        this.setState({
            authedUser:userid
        })
    }
    authedUser() {
        // const { authedUser } = this.state
        this.props.dispatch(setAuthedUser(this.state.authedUser))
        this.setState({toHome:true})
    }
    

    render() {
        console.log(this.props.dispatch)
        if(this.state.toHome === true) {
            return <Redirect to='/' />
        }
        return(
            <div>
                <Container>
                    <Card>
                        <CardHeader><strong>Welcome to Would you Rather App!</strong></CardHeader>
                        <CardBody>
                            <img className='auto' src={reactlogo} alt='react-redux logo' height='300' />
                            <h1>Sign in</h1>
                            <select style={{display:'block', width:'100%'}} onChange={(e)=>this.handleChange(e)} className='block'>
                                <option value={null} >Select User</option>
                                <option value='sarahedo'>Sarah Edo</option>
                                <option value='tylermcginnis'>Tyler McGinnis</option>
                                <option value='johndoe'>John Doe</option>
                            </select>
                            <Button onClick={()=>this.authedUser()} color='success' disabled={this.state.authedUser === null} block>Sign in</Button>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default connect()(Login)