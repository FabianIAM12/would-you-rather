import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import Button from "@material-ui/core/Button";

class QuestionOverview extends Component {

    render() {
        const { question, users } = this.props;

        return (
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={ process.env.PUBLIC_URL + /profiles/ + users[question.author].avatarURL }/>
                    </div>
                    <div className="content">
                        <div className="header">{ question.optionOne.text } ... or</div>
                        <div className="meta">Asked by: {users[question.author].name}</div>
                    </div>
                    <div className="extra content">
                        <div className="selection-button">
                            <Link to={`/question/${question.id}`} className='questionAnswer'>
                                <Button variant="contained">Answer me!</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users}, {question}) {
    return {
        users,
        authedUser,
        question,
    }
}

export default withRouter(connect(mapStateToProps)(QuestionOverview))
