import {RECEIVE_QUESTIONS, VOTE_QUESTION} from '../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        default :
            return state
        case VOTE_QUESTION :
            return {
                ...state
            }
    }
}
