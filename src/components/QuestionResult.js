import React, { Component } from 'react'
import { connect } from 'react-redux'
import Percentage from "./Percentage";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

class QuestionResult extends Component {
    render() {
        const { question } = this.props

        return (
            <div>
                <Percentage mainVotes={question.optionOne.votes.length} restVotes={question.optionTwo.votes.length}/>
                <Percentage mainVotes={question.optionTwo.votes.length} restVotes={question.optionOne.votes.length}/>
                <Link to={`/`}>
                    <Button variant="contained">Go back!</Button>
                </Link>
            </div>
            )
    }
}

function mapStateToProps ({ questions, authedUser }, props) {
    const { question_id } = props.match.params
    const question = questions[question_id]
    return { question,
            authedUser: authedUser }
}

export default connect(mapStateToProps)(QuestionResult)
