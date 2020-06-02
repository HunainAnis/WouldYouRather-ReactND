import React from 'react'
import { Container, Jumbotron } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const NoMatchPage = ({ authedUser }) => {
    return(
        <div>
            <Container>
                <Jumbotron>
                    <h1>404 Not Found</h1>
                    {authedUser===null && <Link to='/login'><h3>Click here to Login</h3></Link>}
                </Jumbotron>
            </Container>
        </div>
    )
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NoMatchPage)