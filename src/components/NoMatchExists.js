import React, {Component} from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class NoMatchExists extends Component {
    render() {
        return (
            <div className='noMatch'>
                Nothing to see here - 404! Sorry.
            </div>
        )
    }
}

function mapStateToProps(authedUser) {
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(NoMatchExists))
