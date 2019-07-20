import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionOverview from './QuestionOverview'
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
        const { questions } = this.props

        return (
        <div>
            <h3 className='center'>Was möchtest du?</h3>
            <ul className='dashboard-list'>
                {this.props.questionsIds.map((id) => (
                    <li key={id}>
                        <QuestionOverview question={questions[id]}/>
                    </li>
                ))}
            </ul>
        </div>
        )
    }
}

function mapStateToProps ({ questions, authedUser }) {
    const question = selectQuestion(questions)

    return {
        questionsIds: Object.keys(questions),
        questions: questions,
        authedUser: authedUser,
    }
}

export default connect(mapStateToProps)(SelectPage)
