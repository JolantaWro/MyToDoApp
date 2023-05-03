import React from 'react';
import {connect} from "react-redux";
import Done from "../components/Task/Done";
import {tasksDoneSelector} from "../redux/selectors";

const mapStateToProps = state => ({
    taskDone: tasksDoneSelector(state.tasks)
});


export default connect(mapStateToProps)(Done);