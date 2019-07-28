import React, {Component} from 'react'
import {connect} from 'react-redux'
import ExampleComponent from "react-rounded-image";


class ProfilePictureSmall extends Component {

    render() {
        const { user } = this.props;

        return (<div>
                    <ExampleComponent
                        image={ process.env.PUBLIC_URL + /profiles/ + user.avatarURL }
                        roundedColor="#321124"
                        imageWidth="40"
                        imageHeight="30"
                        roundedSize="1"/>
                </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {

    return {
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(ProfilePictureSmall)
