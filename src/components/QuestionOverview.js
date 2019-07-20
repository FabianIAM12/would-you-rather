import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

class QuestionOverview extends Component {

    render() {
        const { question } = this.props

        return (
            <div className='question'>
                <h2>Frage</h2>
                <div className='profile'>
                </div>
                { question.optionOne.text } ... or
                <div className="selection-button">
                    <Link to={`/question/${question.id}`} className='questionAnswer'>
                        <h2>Click me</h2>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users}, {question}) {
    return {
        authedUser,
        question: question
    }
}

export default withRouter(connect(mapStateToProps)(QuestionOverview))
