import React from 'react'
import {connect} from 'react-redux'


const WelcomeMessage = (props) => {
    const {user} = props;

    return(
        <span className='topProfileNaming'>
            <i>Welcome, { user.name }!</i>
        </span>
    )
};

function mapStateToProps({users, authedUser}) {

    return {
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(WelcomeMessage)
