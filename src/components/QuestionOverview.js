import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

class QuestionOverview extends Component {

    render() {
        const { question } = this.props

        return (
            <Box color="white" bgcolor="palevioletred">
                { question.optionOne.text } ... or
                <div className="selection-button">
                    <Link to={`/question/${question.id}`} className='questionAnswer'>
                        <Button variant="contained">Answer me!</Button>
                    </Link>
                </div>
            </Box>
        )
    }
}

function mapStateToProps ({authedUser, users}, {question}) {
    return {
        authedUser,
        question: question
    }
}

export default withRouter(connect(mapStateToProps)(QuestionOverview))
