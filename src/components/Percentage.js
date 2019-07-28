import React, {Component} from 'react'
import {connect} from 'react-redux'
import NumberFormat from "react-number-format";

class Percentage extends Component {
    render() {
        const {mainVotes, restVotes} = this.props;

        return (<div>
                <NumberFormat value={mainVotes * 100 / (mainVotes + restVotes)} format="#####%" displayType={'text'}/>
                <span> vs. </span>
                <NumberFormat value={restVotes * 100 / (mainVotes + restVotes)} format="#####%" displayType={'text'}/>
            </div>
        )
    }
}

export default connect()(Percentage)
