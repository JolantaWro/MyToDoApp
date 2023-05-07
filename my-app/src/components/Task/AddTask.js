
import React, {useState} from 'react';

const AddTask = ({onSubmitTask}) => {
    const [form, setForm] = useState({title: "", description: "", open: true})

    const handleChangeInput = (e) => {
        setForm({...form,
            [e.target.name]: e.target.value
        });
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        //dodac walidacje formularza
        onSubmitTask(form);
    };


    return (
        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">Nowe zadanie</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text" className="form-control" name="title" placeholder="Title" value={form.title}
                            onChange={handleChangeInput}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="description" placeholder="Description" value={form.description}
                               onChange={handleChangeInput}/>
                    </div>
                    <button className="btn btn-info">Dodaj zadanie do listy
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;