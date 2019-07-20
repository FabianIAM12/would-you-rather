import {ADD_QUESTION, RECEIVE_QUESTIONS, VOTE_QUESTION} from '../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case VOTE_QUESTION :
            const { authUser, qid, answer } = action

            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authUser)
                    }
                }
            }
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.id]: action.question,
            }
        default :
            return state
    }
}
