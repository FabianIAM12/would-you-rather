import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { formatTweet, formatDate } from "../utils/helpers";
import { TiArrowBackOutline } from 'react-icons/ti/index'
import { TiHeartOutline } from 'react-icons/ti/index'
import { TiHeartFullOutline } from 'react-icons/ti/index'
import { handleToggleTweet } from "../actions/tweets";
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
    handleLike = (e) => {
        e.preventDefault()

        console.log('handled');

        // const { dispatch, tweet, authedUser } = this.props

        /*
        dispatch(handleToggleTweet({
            id: tweet.id,
            hasLiked: tweet.hasLikes,
            authedUser
        }))
         */
    }

    render() {
        return (
            <div className="selection-button">
            <a href="#" onClick={this.handleLike}>
                Click me
            </a>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, tweets}, { id }) {
    /*
    const tweet = tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null
    return {
        authedUser,
        tweet: tweet
            ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            : null
    }*/
}

export default withRouter(connect(mapStateToProps)(Question))
