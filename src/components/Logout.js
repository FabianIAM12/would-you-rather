import React, { Component } from 'react'
import { connect } from 'react-redux'
import { unsetAuthedUser } from "../actions/authedUser";

class Logout extends Component {
    componentDidMount() {
        const {dispatch, authedUser} = this.props;
        console.log(authedUser);
        dispatch(unsetAuthedUser(authedUser));
    }

    render() {
        return (
            <h2>ByeBye!</h2>
        )
    }
}

function mapStateToProps ({ authedUser, dispatch }) {
    return {
        dispatch: dispatch,
        authedUser: authedUser,
    }
}

export default connect(mapStateToProps)(Logout)
