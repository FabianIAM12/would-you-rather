import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


const UserProfile = props => {

    const { users, user } = props;
    const userProfile = users[user.id];

    return (
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                    <img src={`${process.env.PUBLIC_URL}/profiles/${userProfile.avatarURL}`} alt={"profile"}/>
                </div>
                <div className="content">
                    <div className="header">{ userProfile.name }</div>
                    <div className="meta">Total Score: { userProfile.totalScore }<br/>Questions made: { userProfile.questionsCreated }<br/>Questions answered: { userProfile.questionsAnswered }</div>
                </div>
            </div>
        </div>
    )
};

function mapStateToProps ({ authedUser, users }) {

    return {
        authedUser: authedUser,
        users: users,
    }
}

export default withRouter(connect(mapStateToProps)(UserProfile))
