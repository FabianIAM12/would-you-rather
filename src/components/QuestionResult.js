import React, { Component } from 'react'
import { connect } from 'react-redux'
import Percentage from "./Percentage";
import GooglePieChart from "./GooglePieChart";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class QuestionResult extends Component {
    render() {
        const { question } = this.props

        const data = [
            [question.optionOne.text, question.optionTwo.text],
            [question.optionOne.text, question.optionOne.votes.length],
            [question.optionTwo.text, question.optionTwo.votes.length],
        ];

        return (
            <Grid container spacing={5} alignItems="center" justify="center">
                <Grid item xs={8}>
                    <div className="ui link cards">
                        <div className="card">
                            <h3 style={{marginTop: 10}}>Voting Result</h3>
                            <i style={{margin: 3}}>„{question.optionOne.text} or {question.optionTwo.text}"</i>
                            <Percentage mainVotes={question.optionOne.votes.length} restVotes={question.optionTwo.votes.length}/>
                            <Grid container alignItems="center" justify="center">
                                <GooglePieChart data={data}/>
                                <Link to={`/`}>
                                    <Button variant="contained" style={{marginBottom: 15, marginTop: 5}}>Go back!</Button>
                                </Link>
                            </Grid>
                        </div>
                    </div>
                </Grid>
            </Grid>
            )
    }
}

function mapStateToProps ({ questions, authedUser }, props) {
    const { question_id } = props.match.params
    const question = questions[question_id]

    return { question,
            authedUser }
}

export default connect(mapStateToProps)(QuestionResult)
