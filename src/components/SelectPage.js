import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionOverview from './QuestionOverview'
import {handleVoteQuestion} from "../actions/questions";

class SelectPage extends Component {

    render() {
        const { questions, authedUser, users } = this.props

        return (
            <div>
                <h2 className='center'>{users[authedUser].name} would you rather?</h2>
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

function mapStateToProps ({ questions, authedUser, users }) {

    Object.keys(questions)
        .forEach(key => {
            let deleteIt = false;

            // iterate through given answers
            for (const answer in users[authedUser].answers) {
                if (answer === questions[key].id) {
                    deleteIt = true;
                }
            }

            // delete answers of the author
            if (!deleteIt && questions[key] !== undefined && authedUser === questions[key].author){
                deleteIt = true;
            }

            if (deleteIt){
                delete questions[key];
            }
        });

    return {
        questionsIds: Object.keys(questions),
        questions: questions,
        authedUser: authedUser,
        users: users,
    }
}

export default connect(mapStateToProps)(SelectPage)
