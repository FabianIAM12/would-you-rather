import React, {Component} from 'react'
import Percentage from "./Percentage";
import GooglePieChart from "./GooglePieChart";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";


class QuestionResult extends Component {
    render() {
        const {question, data, authedUser, users} = this.props;
        const choiceText = (question[users[authedUser]['answers'][question.id]].text);

        return (
            <div className="ui link cards">
                <div className="card">
                    <h3 style={{marginTop: 10}}>Voting Result</h3>
                    <i style={{margin: 3}}>„{question.optionOne.text} or {question.optionTwo.text}"</i>
                    <Percentage mainVotes={question.optionOne.votes.length}
                                restVotes={question.optionTwo.votes.length}/>
                    <Grid container alignItems="center" justify="center">
                        <GooglePieChart data={data}/>
                        <span><i style={{marginBottom: 5}}>Your choice: {choiceText}</i></span>
                        <br/>
                        <Link to={`/`}>
                            <div className="extra content">
                                <Button variant="contained" style={{marginBottom: 15, marginTop: 5}}>Go back!</Button>
                            </div>
                        </Link>
                    </Grid>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionResult)
