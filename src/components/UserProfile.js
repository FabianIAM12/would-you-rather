import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import QuestionOverview from "./QuestionOverview";

class UserProfile extends Component {

    numberOfAnswers = (answers) => {
        let i = 0;
        for (const answer in answers) {
            i += 1;
        }
        return i;
    }

    render() {
        const { user } = this.props

        const questionsScore = user.questions.length
        const numberOfAnswersScore = this.numberOfAnswers(user.answers)

        return (
            <div className='userProfile'>
                <h2>{user.name}</h2>
                <img src={process.env.PUBLIC_URL + /profiles/ + user.avatarURL} width={175}/>
                <p>{questionsScore}</p>
                <p>{numberOfAnswersScore}</p>
                <p>{questionsScore + numberOfAnswersScore}</p>
            </div>
        )
    }
}

function mapStateToProps ({authedUser}) {
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(UserProfile))
