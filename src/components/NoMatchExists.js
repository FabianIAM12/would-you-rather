import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import UserProfile from "./UserProfile";
import Grid from "@material-ui/core/Grid";

class NoMatchExists extends Component {
    render() {
        return (
            <div className='noMatch'>
                Nothing to see here - 404! Sorry.
            </div>
        )
    }
}

export default NoMatchExists;
