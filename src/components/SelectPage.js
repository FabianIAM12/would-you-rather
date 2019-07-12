import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class SelectPage extends Component {
    render() {
        const { id, replies } = this.props
        return (<div>
                    <h2>Select a question</h2>
                    <Question/>
                    <Question/>
                </div>
            )
    }
}

function mapStateToProps ({ authedUser, tweets, users }, props) {
    const { id } = props.match.params

    return {
        id,
        replies: !tweets[id]
            ? []
            : tweets[id].replies.sort((a,b,) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(SelectPage)
