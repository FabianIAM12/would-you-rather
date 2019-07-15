import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import {handleVoteQuestion} from "../actions/questions";

function selectQuestion(questions) {
    let items = [];
    for (const item in questions) {
        items.push(item)
    }

    const questionId = items[Math.floor(Math.random() * items.length)]
    return questions[questionId]
}

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
        const { question } = this.props

        return (
        <div>
            <h3 className='center'>Was möchtest du?</h3>
            <ul className='dashboard-list'>
                <Question question={question} handleLike={this.handleLike}/>
            </ul>
        </div>
        )
    }
}

function mapStateToProps ({ questions, authedUser }) {
    const question = selectQuestion(questions)

    return {
        questions: questions,
        question: question,
        authedUser: authedUser,
    }
}

export default connect(mapStateToProps)(SelectPage)
