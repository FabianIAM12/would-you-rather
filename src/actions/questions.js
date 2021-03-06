import { showLoading, hideLoading } from "react-redux-loading";
import {saveQuestion, saveQuestionAnswer} from "../api";
import {addAnswerToUser, addQuestionToUser} from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const VOTE_QUESTION = 'VOTE_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question,
    }
}


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
        authedUser,
        answer
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            author: authedUser,
            optionOneText: optionOneText,
            optionTwoText: optionTwoText
        })
        .then((question) => {
            dispatch(addQuestion(question))
            dispatch(addQuestionToUser(question, authedUser))
        }).then(() => dispatch(hideLoading()))
    }
}

export function handleVoteQuestion (info) {
    return (dispatch) => {
        dispatch(voteQuestion(info))
        dispatch(addAnswerToUser(info))

        return saveQuestionAnswer(info)
            .catch((e) => {
                console.warn('Error in vote Question: ', e)
                dispatch(voteQuestion(info))
                alert('this was an error on voting in the question. Try again.');
        })
    }
}
