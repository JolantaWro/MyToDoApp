import React from 'react';
import {connect} from "react-redux";
import Do from "../components/Task/Do";
import {tasksToDoSelector} from "../redux/selectors";


const mapStateToProps = state => ({
    taskToDo: tasksToDoSelector(state.tasks)
});


export default connect(mapStateToProps)(Do);