import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import QuestionOverview from "./QuestionOverview";

class Test extends Component {

    render() {
        return (
            <div>
                Test 123
            </div>
        )
    }
}

function mapStateToProps ({authedUser}) {
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Test))
