import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleVoteQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

class QuestionDetail extends Component {
    state = {
        toHome: false
    };

    handleLike = (option) => {
        const {dispatch, authedUser} = this.props;
        dispatch(handleVoteQuestion({
            qid: this.props.question.id,
            answer: option,
            authedUser: authedUser
        }));

        this.setState(() => ({
            toResult: true
        }))
    };

    handleLikeOne = () => {
        this.handleLike('optionOne');
    };

    handleLikeTwo = () => {
        this.handleLike('optionTwo');
    };

    render() {
        const {question} = this.props;
        const {toResult} = this.state;

        const redirectUrl = '/result/' + question.id;

        if (toResult === true) {
            return <Redirect to={redirectUrl}/>
        }

        return (
            <div className="ui link cards">
                <div className="card">
                    <div className="content">
                        <h3>{ question.optionOne.text }</h3>
                    </div>
                    <div className="extra content">
                        <Link to={`/result/${question.id}`} onClick={this.handleLikeOne}>
                            <Button variant="contained">Vote!</Button>
                        </Link>
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <h3>{ question.optionTwo.text }</h3>
                    </div>
                    <div className="extra content">
                        <Link to={`/result/${question.id}`} onClick={this.handleLikeTwo}>
                            <Button variant="contained">Vote!</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}, props) {
    const {question_id} = props.match.params;
    const question = questions[question_id];
    return {
        question,
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(QuestionDetail)
