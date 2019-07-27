import React, { Component } from 'react'
import { connect } from 'react-redux'
import Percentage from "./Percentage";
import GooglePieChart from "./GooglePieChart";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

class QuestionResult extends Component {
    render() {
        const { question } = this.props

        const data = [
            [question.optionOne.text, question.optionTwo.text],
            [question.optionOne.text, question.optionOne.votes.length],
            [question.optionTwo.text, question.optionTwo.votes.length],
        ];

        return (
            <div className="ui link cards">
                <div className="card">
                    <GooglePieChart data={data}/>
                    <Percentage mainVotes={question.optionOne.votes.length} restVotes={question.optionTwo.votes.length}/>
                    <Link to={`/`}>
                        <Button variant="contained">Go back!</Button>
                    </Link>
                </div>
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
