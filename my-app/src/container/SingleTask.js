import React from 'react';
import {connect} from "react-redux";
import SingleTask from "../components/Task/SingleTask";
import {removeTask} from "../redux/actions";
const mapStateToProps = state => ({
    allTasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
    removeTask: (task)=>dispatch(removeTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleTask);