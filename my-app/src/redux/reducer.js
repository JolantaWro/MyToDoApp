import {combineReducers} from "redux";

const initialStation = [];

function reducerTasks (state=initialStation, action) {
    switch (action.type){
        default:
            return state
    }
}

const rootReducer = combineReducers({
    tasks: reducerTasks
})