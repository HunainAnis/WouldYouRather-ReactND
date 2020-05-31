import React from 'react'
import List from './List'
import { connect } from 'react-redux'

class QuestionDetail extends React.Component {
    render() {
        const { id } = this.props
        console.log(id)
        return(
            <div>
                {/* <List uid={id} /> */}
            </div>
        )
    }
}

function mapStateToProps({  }, props) {

    const { id } = props.match.params

    return {
        id
    }
}

export default connect(mapStateToProps)(QuestionDetail)