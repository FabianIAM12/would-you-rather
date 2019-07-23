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
import Button from "@material-ui/core/Button";

class SelectPage extends Component {
    handleLike = (option) => {
        const { dispatch, authedUser } = this.props;
        dispatch(handleVoteQuestion({
            qid: this.props.question.id,
            answer: option,
            authedUser: authedUser
        }))
    }

    render() {
        const { questions } = this.props

        return (
            <div>
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

export default connect(mapStateToProps)(SelectPage)
