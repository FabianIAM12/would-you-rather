import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


class UserProfile extends Component {

    render() {
        const { users, user } = this.props
        const userProfile = users[user.id];

        const sumOfAnswers = Object.values(userProfile.answers).length;

        return (
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={ process.env.PUBLIC_URL + /profiles/ + userProfile.avatarURL } alt={"profile"}/>
                    </div>
                    <div className="content">
                        <div className="header">{ userProfile.name }</div>
                        <div className="meta">Total Score: { userProfile.questions.length + sumOfAnswers }<br/>Questions made: { userProfile.questions.length }<br/>Questions answered: { sumOfAnswers }</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users }) {

    return {
        authedUser: authedUser,
        users: users,
    }
}

export default withRouter(connect(mapStateToProps)(UserProfile))
