import { getInitialData } from "../api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { showLoading } from "react-redux-loading";
import { hideLoading } from "react-redux-loading";

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading())
        })
    }
}
