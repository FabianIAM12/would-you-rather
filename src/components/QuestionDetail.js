import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleVoteQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import QuestionResult from "./QuestionResult";


class QuestionDetail extends Component {
    state = {
        showResult: false
    };

    handleLike = (option) => {
        const {authedUser} = this.props;

        this.props.voteQuestion({
            qid: this.props.question.id,
            answer: option,
            authedUser: authedUser
        });

        this.setState(() => ({
            showResult: true
        }));
    };

    handleLikeOne = () => {
        this.handleLike('optionOne');
    };

    handleLikeTwo = () => {
        this.handleLike('optionTwo');
    };

    render() {
        const {question, authedUser, users} = this.props;
        let {showResult} = this.state;

        const notFoundUrl = '/questions/notexisting/';
        if (question === undefined) {
            return <Redirect to={notFoundUrl}/>
        }

        if (users[authedUser]['answers'][question.id] !== undefined) {
            showResult = true;
        }

        /* data for google charts */
        const data = [
            [question.optionOne.text, question.optionTwo.text],
            [question.optionOne.text, question.optionOne.votes.length],
            [question.optionTwo.text, question.optionTwo.votes.length],
        ];

        return (
            <div className='vote'>
                <Grid container spacing={5} alignItems="center" justify="center">
                    <Grid item xs={8}>
                        {!showResult ? (
                            <div className="ui link cards">
                                <div className="card">
                                    <div className="content">
                                        <h3>{question.optionOne.text}</h3>
                                    </div>
                                    <div className="extra content">
                                        <Button variant="contained" onClick={this.handleLikeOne}>Vote!</Button>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="content">
                                        <h3>{question.optionTwo.text}</h3>
                                    </div>
                                    <div className="extra content">
                                        <Button variant="contained" onClick={this.handleLikeTwo}>Vote!</Button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <QuestionResult question={question} data={data}/>
                        )}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return ({
        voteQuestion: (voteObj) => {
            dispatch(handleVoteQuestion({
                qid: voteObj.qid,
                answer: voteObj.answer,
                authedUser: voteObj.authedUser
            }))
        }
    })
}

function mapStateToProps({questions, authedUser, users}, props) {
    const {question_id} = props.match.params;
    const question = questions[question_id];

    return {
        question,
        users,
        authedUser: authedUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail)
