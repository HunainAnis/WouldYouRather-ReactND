import React from 'react'
import List from './List'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import UnAnswered from './UnAnswered'
import { Redirect } from 'react-router-dom'

class QuestionDetail extends React.Component {
    render() {
        const { id, authedUser } = this.props
        console.log(id)
        if(authedUser=== null) {
            return <Redirect to='/' />
        }
        return(
            <div>
                <Container>
                    <UnAnswered uid={id} />
                </Container>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }, props) {

    const { id } = props.match.params

    return {
        id,
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionDetail)