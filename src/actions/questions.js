import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA"
import { showLoading, hideLoading } from "react-redux-loading"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_ANSWER  = 'SAVE_ANSWER'

export function receiveQuestions(questions) {
    return  {
        type:RECEIVE_QUESTIONS,
        questions
        }    
    }

    function saveQuestion(question) {
        return{
            type:SAVE_QUESTION,
            question
        }
    }

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
    return(dispatch) => {
        dispatch(showLoading())
        const question = {
            optionOneText, optionTwoText, author
        }
        _saveQuestion(question)
        .then(data=>{
            dispatch(saveQuestion(data))
            dispatch(hideLoading())
        })
    }
}

function saveAnswer(questionAnswer) {
return {
    type:SAVE_ANSWER,
    questionAnswer,
    }
}

export function handleSaveAnswer( authedUser, qid, answer ) {
    return(dispatch) => {
        const questionAnswer = { authedUser, qid, answer }
        _saveQuestionAnswer(questionAnswer)
        .then(()=>(
            dispatch(saveAnswer(questionAnswer))
        ))
    }
}