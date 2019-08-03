import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'
import Button from "@material-ui/core/Button";


class addQuestion extends Component {
    state = {
        answerOne: '',
        answerTwo: '',
        toHome: false,
    };

    handleChangeOne = (e) => {
        const text = e.target.value;

        this.setState(() => ({
                answerOne: text
            })
        )
    };

    handleChangeTwo = (e) => {
        const text = e.target.value;

        this.setState(() => ({
                answerTwo: text
            })
        )
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const {answerOne, answerTwo} = this.state;
        const {dispatch, id} = this.props;

        dispatch(handleAddQuestion(answerOne, answerTwo));

        this.setState(() => ({
            answerOne: '',
            answerTwo: '',
            toHome: id ? false : true,
        }))
    };

    render() {
        const {answerOne, answerTwo, toHome} = this.state;

        if (toHome === true) {
            return <Redirect to='/'/>
        }

        return (
            <div>
                <h3 className='center'>Compose a new Poll</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea placeholder="Question 1"
                              value={answerOne}
                              onChange={this.handleChangeOne}
                              className='textarea'
                    />
                    <br/>
                    <textarea placeholder="Question 2"
                              value={answerTwo}
                              onChange={this.handleChangeTwo}
                              className='textarea'
                    />
                    <br/>
                    <Button variant="contained" type='submit' disabled={answerOne === '' || answerTwo === ''}>Add
                        Question!</Button>
                </form>
            </div>
        )
    }
}

export default addQuestion
