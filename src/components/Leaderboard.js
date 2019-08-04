import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import UserProfile from "./UserProfile";
import Grid from "@material-ui/core/Grid";
import {sortBy} from "lodash";


class Leaderboard extends Component {
    render() {
        const {users} = this.props;

        return (
            <div className='leaderboard'>
                <h3>Leaderboard</h3>
                <Grid container spacing={5} alignItems="center" justify="center">
                    {this.props.userIds.map((name) => (
                        <Grid key={name} item xs={8}>
                            <UserProfile user={users[name]} key={name}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    /* calc values for user profile */
    Object.keys(users).map(user => {
        const profile = users[user];
        profile.questionsCreated = profile.questions.length;
        profile.questionsAnswered = Object.values(profile.answers).length;
        profile.totalScore = profile.questionsCreated + profile.questionsAnswered;
        return profile;
    });

    users = sortBy(users, ['user', 'totalScore']).reverse();

    return {
        authedUser,
        users,
        userIds: Object.keys(users),
    }
}

export default withRouter(connect(mapStateToProps)(Leaderboard))
