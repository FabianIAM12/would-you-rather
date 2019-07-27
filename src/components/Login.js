import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from "../actions/authedUser";
import {
    Header,
    Form
} from 'semantic-ui-react';

class Login extends Component {
    state = {
        value: ''
    };

    onChange = (e, { value }) => {
        this.setState({ value });
    };

    handleLogin = (e) => {
        console.log(e);
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(setAuthedUser(this.state.value));
    };

    prepareData = () => {
        const { users } = this.props;

        return Object.values(users).map(user => ({
            key: user.id,
            text: user.name,
            value: user.id,
            image: { avatar: true, src: process.env.PUBLIC_URL + /profiles/ + user.avatarURL }
        }));
    };

    render() {
        const { value } = this.state;
        const disabled = value === '' ? true : false;

        return (
            <Form onSubmit={this.handleLogin}>
                <Header as="h2" color="green">
                    Sign In
                </Header>
                <Form.Dropdown
                    placeholder="Select User"
                    fluid
                    selection
                    scrolling
                    options={this.prepareData()}
                    value={value}
                    onChange={this.onChange}
                    required/>
                <Form.Button content="Login" positive disabled={disabled} fluid />
            </Form>
        )
    }
}

function mapStateToProps({ authedUser, users}) {
    return {
        authedUser: authedUser,
        userIds: Object.keys(users),
        users: users,
    }
}

export default connect(mapStateToProps)(Login)
