import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import UserProfile from "./UserProfile";
import Grid from "@material-ui/core/Grid";


class Leaderboard extends Component {
    render() {
        const {users} = this.props;

        return (
            <div className='highscore'>
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
    const ordered = {};
    Object.keys(users).sort().reverse().forEach(function (key) {
        ordered[key] = users[key];
    });
    users = ordered;

    return {
        authedUser,
        users,
        userIds: Object.keys(users),
    }
}

export default withRouter(connect(mapStateToProps)(Leaderboard))
