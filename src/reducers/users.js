import {ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER, RECEIVE_USERS} from "../actions/users";

export default function users (state={}, action){
    const { user, question } = action

    switch (action.type) {
        case RECEIVE_USERS :

            // Adding the calculated values to have them available globally
            Object.keys(action.users).forEach(function(user){
                action.users[user]['questionsCreated'] = action.users[user].questions.length;

                let i = 0;
                for (const answer in action.users[user].answers) {
                    i += 1;
                }
                action.users[user]['questionsAnswered'] = i;
                action.users[user]['totalScore'] = action.users[user]['questionsAnswered'] + action.users[user]['questionsCreated'];
            });

            return {
                ...state,
                ...action.users,
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
