import React, {Component} from 'react'
import {logout} from "../actions/authedUser";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Logout extends Component {
    render() {
        const {dispatch, authedUser} = this.props;
        dispatch(logout(authedUser));

        return (
            <Redirect to={'/'}/>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(Logout)
