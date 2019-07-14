import {ADD_QUESTION, RECEIVE_QUESTIONS, VOTE_QUESTION} from '../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case VOTE_QUESTION :
            return {
                ...state
            }
        case ADD_QUESTION :
            /* todo: understand this */
            return {
                ...state,
                [action.question.id]: action.question,
            }
        default :
            return state
    }
}
