import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionOverview from './QuestionOverview'
import {handleVoteQuestion} from "../actions/questions";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Switch from "@material-ui/core/Switch";
import Route from "react-router-dom/es/Route";
import Test from "./Test";
import Paper from "@material-ui/core/Paper";

class SelectPage extends Component {
    handleLike = (option) => {
        const { dispatch, authedUser } = this.props;
        dispatch(handleVoteQuestion({
            qid: this.props.question.id,
            answer: option,
            authedUser: authedUser
        }))
    }

    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { questions } = this.props

        return (
            <div>
                <h3 className='center'>Whould you rather?</h3>
                <ul className='dashboard-list'>
                    {this.props.questionsIds.map((id) => (
                        <li key={id}>
                            <QuestionOverview question={questions[id]}/>
                        </li>
                    ))}
                </ul>
                <AppBar position="static" color="default">
                    <Tabs value={this.state.value} onChange={this.handleChange}>
                        <Tab label="Item One" component={Link} to="/one" />
                        <Tab label="Item Two" component={Link} to="/two" />
                    </Tabs>
                </AppBar>

                <Switch>
                    <Route path="/one" component={PageShell(ItemOne)} />
                    <Route path="/two" component={PageShell(ItemTwo)} />
                </Switch>

            </div>
        )
    }
}

function mapStateToProps ({ questions, authedUser }) {
    return {
        questionsIds: Object.keys(questions),
        questions: questions,
        authedUser: authedUser,
    }
}

function ItemOne() {
    return (

            <div>Item 123456</div>
    );
}

function ItemTwo() {
    return (
        <Paper>
            <div>Item two</div>
        </Paper>
    );
}

const PageShell = (Page) => {
    return props => (
        <div className="page">
            <Page {...props} />
        </div>
    );
};

export default connect(mapStateToProps)(SelectPage)
