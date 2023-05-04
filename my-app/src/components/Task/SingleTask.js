import React from 'react';
import {Link, useParams} from "react-router-dom";
import {getTask} from "../../redux/selectors";

const SingleTask = ({allTasks, removeTask}) => {

    const {id} = useParams()
    const filteredTasks = getTask(allTasks, parseInt(id))
    console.log(filteredTasks)

    return (
        <div>
            {filteredTasks.length === 0 && <div className="panel-block">Brak wpisów!</div>}

            {filteredTasks.length > 0 && (filteredTasks.map(el => (
                <>
                    <h2 key={el.id}>{el.id} {el.title} {el.description}</h2>
                    <button onClick={() => removeTask(el)}>Usuń</button></>
            )))}

        </div>
    );
};

export default SingleTask;