import {ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER, RECEIVE_USERS} from "../actions/users";

export default function users (state={}, action){
    const { user, question } = action

    switch (action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            };
        case ADD_QUESTION_TO_USER :
            return {
                ...state,
                [user]: {
                    ...state[user],
                    questions: state[user].questions.concat(question.id)
                }
            };
        case ADD_ANSWER_TO_USER :
            const { qid, answer, authedUser } = action
            console.log(qid, answer, authedUser)
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            };
        default :
            return state;
    }
}
