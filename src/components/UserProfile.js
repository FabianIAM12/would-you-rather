import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import ExampleComponent from "react-rounded-image";

class UserProfile extends Component {

    render() {
        const { user } = this.props

        return (
            <div className='userProfile'>
                <h2>{user.name}</h2>
                <ExampleComponent
                    image={ process.env.PUBLIC_URL + /profiles/ + user.avatarURL }
                    roundedColor="#321124"
                    imageWidth="200"
                    imageHeight="150"
                    roundedSize="1"/>
                <p>Total: { user.totalScore }</p>
                <p>Questions made: { user.questionsCreated }</p>
                <p>Questions answered: { user.questionsAnswered }</p>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(UserProfile))
