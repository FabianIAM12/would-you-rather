import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import UserProfile from "./UserProfile";

class HighScore extends Component {


    render() {
        const {users} = this.props;

        return (
            <div className='highscore'>
                <h2>Highscore</h2>

                {this.props.userIds.map((name) => (
                    <li key={name}><UserProfile user={users[name]}/>
                    </li>
                ))}

            </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    const ordered = {};
    Object.keys(users).sort().reverse().forEach(function(key) {
        ordered[key] = users[key];
    });
    users = ordered;

    return {
        authedUser,
        users,
        userIds: Object.keys(users),
    }
}

export default withRouter(connect(mapStateToProps)(HighScore))
