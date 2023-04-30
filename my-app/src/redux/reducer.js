import {combineReducers} from "redux";

const initialStation = [];

function reducerTasks (state=initialStation, action) {
    switch (action.type){
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    tasks: reducerTasks
})