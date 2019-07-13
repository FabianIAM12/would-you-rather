import {
  _getUsers,
  _getQuestions,
} from './utils/_DATA.js'
import {_saveQuestion, _saveQuestionAnswer} from "./utils/_DATA";

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion (info) {
  return _saveQuestion(info)
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info)
}
