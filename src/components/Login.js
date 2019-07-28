import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from "../actions/authedUser";
import {Form, Grid, Header, Image} from 'semantic-ui-react';

class Login extends Component {
    state = {
        value: ''
    };

    onChange = (e, {value}) => {
        this.setState({value});
    };

    handleLogin = (e) => {
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(setAuthedUser(this.state.value));
    };

    prepareData = () => {
        const {users} = this.props;

        return Object.values(users).map(user => ({
            key: user.id,
            text: user.name,
            value: user.id,
            image: {avatar: true, src: process.env.PUBLIC_URL + /profiles/ + user.avatarURL}
        }));
    };

    render() {
        const {value} = this.state;
        const disabled = value === '' ? true : false;

        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h1' color='orange' textAlign='center'>
                        <Image src='/logo.png'/><br/>Log-in to your account
                    </Header>
                    <Form onSubmit={this.handleLogin}>
                        <Form.Dropdown
                            placeholder="Select User"
                            fluid
                            selection
                            scrolling
                            options={this.prepareData()}
                            value={value}
                            onChange={this.onChange}
                            required/>
                        <Form.Button content="Login" positive disabled={disabled} fluid color='orange'/>
                    </Form>
                </Grid.Column>
            </Grid>

        )
    }
}

function mapStateToProps({authedUser, users}) {
    return {
        authedUser: authedUser,
        userIds: Object.keys(users),
        users: users,
    }
}

export default connect(mapStateToProps)(Login)
