export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const CHANGE_TASK = "CHANGE_TASK";

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
});
export const removeTask = (task) => ({
    type: REMOVE_TASK,
    payload: task
});

export const changeTask = (task) => ({
    type: CHANGE_TASK,
    payload: task
})