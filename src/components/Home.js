import React from 'react'
import { Container, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap'
import classnames from 'classnames';
import List from './List';
import { connect } from 'react-redux';
import QuestionDetail from './Question';
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
        const { questions, authedUser } = this.props
        console.log(questions)
        if(authedUser === null) {
            return <Redirect to='/Login' />
        }
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
                                {questions.map(i=>(
                                    <List key = {i} uid= {i} />
                                ))}
                            </Col>
                        </Row>
                        </TabPane>
                        <TabPane tabId="2">
                        </TabPane>
                    </TabContent>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({ questions, authedUser }) => {
    return {
        authedUser,
        questions : Object.keys(questions)
        .sort((a,b)=> questions[b].timestap - questions[a].timestap)
    }
}

export default connect(mapStateToProps)(Home)