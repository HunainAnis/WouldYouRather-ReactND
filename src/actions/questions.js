import { _saveQuestion } from "../utils/_DATA"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'

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

export function handleSaveQuestion(optionOne, optionTwo, author) {
    return(dispatch) => {
        const question = {
            optionOne, optionTwo, author
        }
        _saveQuestion({optionOne, optionTwo, author})
        .then(data=>(
            dispatch(saveQuestion(data))
        ))
    }
}