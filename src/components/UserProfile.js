import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class UserProfile extends Component {

    render() {
        const { user } = this.props

        return (
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={ process.env.PUBLIC_URL + /profiles/ + user.avatarURL } alt={"profile"}/>
                    </div>
                    <div className="content">
                        <div className="header">{ user.name }</div>
                        <div className="meta">Total Score: { user.totalScore }<br/>Questions made: { user.questionsCreated }<br/>Questions answered: { user.questionsAnswered }</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser: authedUser
    }
}

export default withRouter(connect(mapStateToProps)(UserProfile))