import React from 'react'
import { Container, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap'
import classnames from 'classnames';
import List from './List';
import { connect } from 'react-redux';

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
        const { questions } = this.props
        console.log(questions)
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
                        <Row>
                            <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                            </Col>
                            <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                            </Col>
                        </Row>
                        </TabPane>
                    </TabContent>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({ questions }) => {
    return {
        questions : Object.keys(questions)
        .sort((a,b)=> questions[b].timestap - questions[a].timestap)
    }
}

export default connect(mapStateToProps)(Home)