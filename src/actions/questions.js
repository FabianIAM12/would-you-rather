import { showLoading, hideLoading } from "react-redux-loading";
import {saveQuestion, saveQuestionAnswer} from "../api";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const VOTE_QUESTION = 'VOTE_QUESTION'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function voteQuestion({ qid, authedUser, answer }){
    return {
        type: VOTE_QUESTION,
        qid,
        answer,
        authedUser
    }
}


export function handleVoteQuestion (info) {
    return (dispatch) => {
        console.log('---');
        console.log(info);
        console.log('---');
        dispatch(voteQuestion(info))

        return saveQuestionAnswer(info)
            .catch((e) => {
                console.warn('Error in vote Question: ', e)
                dispatch(voteQuestion(info))
                alert('this was an error on voting in the tweet. Try again.');
        })
    }
}
