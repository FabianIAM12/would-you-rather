import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { formatTweet, formatDate } from "../utils/helpers";
import { TiArrowBackOutline } from 'react-icons/ti/index'
import { TiHeartOutline } from 'react-icons/ti/index'
import { TiHeartFullOutline } from 'react-icons/ti/index'
import { handleToggleTweet } from "../actions/questions";
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
    handleLikeOne = () => {
        this.props.handleLike('optionOne');
    }

    handleLikeTwo = () => {
        this.props.handleLike('optionTwo');
    }


    render() {
        const { question } = this.props

        return (
            <div className='question'>
                <h2>Frage</h2>
                    <a href="#" onClick={this.handleLikeOne}>{ question.optionOne.text }
                    </a>
                    <br/>
                    <br/>
                    <a href="#" onClick={this.handleLikeTwo}>{ question.optionTwo.text }
                    </a>
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

export default withRouter(connect(mapStateToProps)(Question))
