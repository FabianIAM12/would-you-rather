import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import ExampleComponent from "react-rounded-image";

class UserProfile extends Component {

    render() {
        const { user } = this.props

        return (
            <div className='userProfile'>
                <h3>{user.name}</h3>
                <ExampleComponent
                    image={ process.env.PUBLIC_URL + /profiles/ + user.avatarURL }
                    roundedColor="#321124"
                    imageWidth="200"
                    imageHeight="150"
                    class="test"
                    roundedSize="1"/>
                <br/>
                <p>Total: { user.totalScore }<br/>
                Questions made: { user.questionsCreated }<br/>
                Questions answered: { user.questionsAnswered }</p>
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
