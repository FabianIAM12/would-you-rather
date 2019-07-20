import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion, handleVoteQuestion} from '../actions/questions'
import { Redirect } from 'react-router-dom'
import Percentage from "./Percentage";

class QuestionDetail extends Component {
    state = {
        toHome: false
    };

    handleLike = (option) => {
        const { dispatch, authedUser } = this.props;
        dispatch(handleVoteQuestion({
            qid: this.props.question.id,
            answer: option,
            authedUser: authedUser
        }))

        this.setState(() => ({
            toHome: true
        }))
    }

    handleLikeOne = () => {
        this.handleLike('optionOne');
    }

    handleLikeTwo = () => {
        this.handleLike('optionTwo');
    }

    render() {
        const { question } = this.props
        const { toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <h3 className='center'>Question Detail</h3>
                    <a href="#" onClick={this.handleLikeOne}>{ question.optionOne.text } Votet by: {question.optionOne.votes.length}
                    </a>
                <Percentage mainVotes={question.optionOne.votes.length} restVotes={question.optionTwo.votes.length}/>
                    <a href="#" onClick={this.handleLikeTwo}>{ question.optionTwo.text } Votet by: {question.optionTwo.votes.length}
                    </a>
                <Percentage mainVotes={question.optionTwo.votes.length} restVotes={question.optionOne.votes.length}/>
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

export default connect(mapStateToProps)(QuestionDetail)
