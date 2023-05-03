import {connect} from "react-redux";
import React from 'react';
import {addTask} from "../redux/actions";
import AddTask from "../components/Task/AddTask";

const AddTaskContainer = ({addTask}) => {
    const handleSaveTask = (value) => {
        addTask(value)
    }

    return (
        <>
            <AddTask onSubmitTask={handleSaveTask}/>
        </>
    );
};




const mapDispatchToProps = dispatch => ({
    addTask: (value)=> dispatch(addTask(value))
});

export default connect(null, mapDispatchToProps)(AddTaskContainer);