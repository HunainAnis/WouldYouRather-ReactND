import React from 'react'
import { Container, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap'
import classnames from 'classnames';
import List from './List';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
    state={
        activeTab: '1',

    }

    toggle(id) {
        this.setState({
            activeTab: id
        })
    }
    render() {
        const { questions, authedUser, users } = this.props
        if(authedUser === null) {
            return <Redirect to='/Login' />
        }
        const answered = Object.keys(users[authedUser].answers)
        const unanswered = questions.filter(i=>!answered.includes(i))
        return(
            <div>
                <Container>
                    <Nav tabs>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Unanswerd Questions
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Answered Questions
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                {authedUser !== null && unanswered.map(i=>(
                                    <List key = {i} uid= {i} />
                                ))}
                            </Col>
                        </Row>
                        </TabPane>
                        <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                {authedUser !== null && answered.map(i=>(
                                    <List key = {i} uid= {i} />
                                ))}
                            </Col>
                        </Row>
                        </TabPane>
                    </TabContent>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({ questions, authedUser, users }) => {
    return {
        authedUser,
        users,
        questions : Object.keys(questions)
        .sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home)