import {combineReducers} from "redux";

const initialStation = [];

function reducerTasks (state=initialStation, action) {
    switch (action.type){
        case ADD_TASK:
            const taskId = maxIdTasks(state)
            return [...state, {id: taskId, ...action.payload}]
        case REMOVE_TASK:
            return state.filter(element => element.id !== action.payload.id);
        case CHANGE_TASK:
            return state.map(todo => {
                if(todo.id !== action.payload.id) {
                    return todo;
                }
                return {
                    ...todo,
                    open: !todo.open
                }
            })
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    tasks: reducerTasks
})