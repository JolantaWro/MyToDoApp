import React from 'react';
import {Link} from "react-router-dom";

const Done = ({taskDone}) => {

    return (
        <div>
            {taskDone.length === 0 && <div className="panel-block">Brak wpisów!</div>}
            {taskDone.length > 0 && taskDone.map(el => (<Link to={`/${el.id}`} key={el.id}>{el.title} {el.description}</Link>))}
        </div>
    );
};

export default Done;