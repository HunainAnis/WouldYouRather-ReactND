import { RECEIVE_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER } from "../actions/questions"

export default function questions (state={}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.id]:action.question
            }
        case SAVE_ANSWER :
            return {
                ...state,
                [action.questionAnswer.qid]: {
                    ...state[action.questionAnswer.qid],
                    [action.questionAnswer.answer]:{
                        ...state[action.questionAnswer.qid][action.questionAnswer.answer],
                        votes:state[action.questionAnswer.qid][action.questionAnswer.answer].votes.concat([action.questionAnswer.authedUser])
                    }
                }
            }
        default:
            return state
    }
}