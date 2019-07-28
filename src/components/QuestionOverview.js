import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class QuestionOverview extends Component {

    render() {
        const {question, authedUser, users, hideVote, hideAuthor, showFullQuestion, showUserVote} = this.props;

        let button = '';
        let authorName = '';
        let vote = '';
        let voteText = '';
        let questionField = question.optionOne.text + ' ... or';

        if (!hideVote) {
            button =
                <div className="extra content">
                    <div className="selection-button">
                        <Link to={`/question/${question.id}`} className='questionAnswer'>
                            <Button variant="contained">Answer me!</Button>
                        </Link>
                    </div>
                </div>;
        }
        if (!hideAuthor) {
            authorName = <div className="meta">Asked by: {users[question.author].name}</div>;
        }
        if (showFullQuestion) {
            questionField = question.optionOne.text + ' or ' + question.optionTwo.text;
        }
        if (showUserVote) {
            const searchVote = question.optionOne.votes.filter(vote => vote === authedUser);
            if (searchVote.length > 0) {
                voteText = question.optionOne.text;
            } else {
                voteText += question.optionTwo.text;
            }
            vote = <div className="extra content"> Your Answer: {voteText}</div>;
        }

        return (
            <Grid container spacing={5} alignItems="center" justify="center">
                <Grid item xs={8}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL + /profiles/ + users[question.author].avatarURL}
                                     alt={"profile"}/>
                            </div>
                            <div className="content">
                                <div className="header">{questionField}</div>
                                {authorName}
                            </div>
                            {vote}
                            {button}
                        </div>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

function mapStateToProps({authedUser, users}, {question}) {
    return {
        users,
        authedUser,
        question,
    }
}

export default withRouter(connect(mapStateToProps)(QuestionOverview))
