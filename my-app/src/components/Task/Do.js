import React from 'react';
import {Link} from "react-router-dom";

const Do = ({taskToDo}) => {

    return (
        <div>
            {taskToDo.length === 0 && <div className="panel-block">Brak wpisów!</div>}
            {taskToDo.length > 0 && taskToDo.map(el => (<Link to={`/${el.id}`} key={el.id}>{el.title} {el.description}</Link>))}
        </div>
    );
};

export default Do;