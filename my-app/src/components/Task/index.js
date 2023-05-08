import React from 'react';
import {Link} from "react-router-dom";


const AllTasks = ({tasks, removeTask, changeTask}) => {

    return (
        <>
            {tasks.length === 0 && <div className="note">Brak wpisów!</div>}

            {tasks.length > 0 && tasks.map(el => (<>
                    <li>
                        <Link to={`/${el.id}`} key={el.id} className="note">{el.title}<br/>{el.description}</Link>
                        <button onClick={() => removeTask(el)}>Usuń</button>
                        <button onClick={() => changeTask(el)}>Zrobione</button>
                    </li>
                </>
            ))}
        </>
    );
};

export default AllTasks;