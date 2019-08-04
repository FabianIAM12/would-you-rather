import React from 'react'
import Percentage from "./Percentage";
import GooglePieChart from "./GooglePieChart";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";


const QuestionResult = props => {
    const {question, data, authedUser, users} = props;
    const choiceText = (question[users[authedUser]['answers'][question.id]].text);

    return (
        <div className="ui link cards">
            <div className="card">
                <h3 style={{marginTop: 10}}>Voting Result</h3>
                <i style={{margin: 3}}>„{question.optionOne.text} or {question.optionTwo.text}"</i>
                <Percentage mainVotes={question.optionOne.votes.length}
                            restVotes={question.optionTwo.votes.length}/>
                <GooglePieChart data={data}/>
                <div className="extra content" style={{marginTop: 5}}>
                    <div className="selection-button">
                        <i style={{marginBottom: 5}}>Your choice: {choiceText}</i>
                    </div>
                </div>
                <Link to={`/`}>
                    <div className="extra content">
                        <Button variant="contained" style={{marginBottom: 15, marginTop: 5}}>Go back!</Button>
                    </div>
                </Link>
            </div>
        </div>
    )
};

function mapStateToProps({users, authedUser}) {
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionResult)
