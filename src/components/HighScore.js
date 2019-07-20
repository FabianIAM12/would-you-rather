import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import QuestionOverview from "./QuestionOverview";
import UserProfile from "./UserProfile";

class HighScore extends Component {

    render() {
        const { users, userIds, authedUser } = this.props

        return (
            <div className='highscore'>
                <h2>Frage</h2>

                {this.props.userIds.map((id) => (
                    <li key={id}>
                        <UserProfile user={users[id]}/>
                    </li>
                ))}

            </div>
        )
    }
}

function mapStateToProps ({authedUser, users}) {
    return {
        authedUser,
        users,
        userIds: Object.keys(users),
    }
}

export default withRouter(connect(mapStateToProps)(HighScore))
