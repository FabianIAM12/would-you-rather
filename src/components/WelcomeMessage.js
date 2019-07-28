import React, {Component} from 'react'
import {connect} from 'react-redux'


class WelcomeMessage extends Component {

    render() {
        const { user } = this.props;

        return (<span className='topProfileNaming'>Welcome, { user.name }</span>)
    }
}

function mapStateToProps({users, authedUser}) {

    return {
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(WelcomeMessage)
