import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleVoteQuestion} from '../actions/questions'
import {Link, Redirect} from 'react-router-dom'
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

class QuestionDetail extends Component {
    state = {
        toHome: false
    };

    handleLike = (option) => {
        const { dispatch, authedUser } = this.props;
        dispatch(handleVoteQuestion({
            qid: this.props.question.id,
            answer: option,
            authedUser: authedUser
        }))

        this.setState(() => ({
            toHome: true
        }))
    }

    handleLikeOne = () => {
        this.handleLike('optionOne');
    }

    handleLikeTwo = () => {
        this.handleLike('optionTwo');
    }

    render() {
        const { question } = this.props
        const { toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <Box color="white" bgcolor="palevioletred" width="50%">
                <h3 className='center'>Question Detail</h3>
                    <h2>{ question.optionOne.text }</h2>
                    <Link to={`/result/${question.id}`} onClick={this.handleLikeOne}>
                        <Button variant="contained">Vote!</Button>
                    </Link>
                    <h2>{ question.optionTwo.text }</h2>
                    <Link to={`/result/${question.id}`} onClick={this.handleLikeTwo}>
                        <Button variant="contained">Vote!</Button>
                    </Link>
            </Box>
        )
    }
}

function mapStateToProps ({ questions, authedUser }, props) {
    const { question_id } = props.match.params
    const question = questions[question_id]
    return { question,
            authedUser: authedUser }
}

export default connect(mapStateToProps)(QuestionDetail)
