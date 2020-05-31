import { _getUsers, _getQuestions } from "../utils/_DATA"
import { receiveUsers } from "./users"

function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),              
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
}

export function handleInitialData() {
    return(dispatch) => {
        return getInitialData()
            .then(({users, questions})=>{
                dispatch(receiveUsers(users))
            })
    }
}