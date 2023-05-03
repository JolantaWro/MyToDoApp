import React from 'react';
import {connect} from "react-redux";
import {addTask, changeTask, removeTask} from "../redux/actions";
import AllTasks from "../components/Task";
import AddTask from "../components/Task/AddTask";

const TasksContainer = ({tasks, removeTask, changeTask}) => {

    return (
        <>
            <AllTasks tasks={tasks} removeTask={removeTask} changeTask={changeTask} />
        </>
    );
};

const mapStateToProps = state => ({
    tasks: state.tasks,
})

const mapDispatchToProps = dispatch => ({
    removeTask: (task)=>dispatch(removeTask(task)),
    changeTask: (task)=>dispatch(changeTask(task))
})


export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)