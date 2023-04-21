import React, { useContext, useEffect, useState } from 'react';
import noteContext from '../context/noteContext';

export default function Todo(props) {
    const context = useContext(noteContext);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        let value = event.target.value;
        context.setStatus(2);
        setInputValue(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newToDoList = [...context.text, inputValue];
        context.state(newToDoList);
        localStorage.setItem('toDoList', JSON.stringify(newToDoList));
        context.setStatus(1);
        setInputValue('');
    };
    const handleDelete = (event, index) => {
        event.preventDefault();
        const newToDoList = [...context.text];
        newToDoList.splice(index, 1);
        context.state(newToDoList);
        localStorage.setItem('toDoList', JSON.stringify(newToDoList));
    };
    useEffect(() => {
        
        const storedToDoList = JSON.parse(localStorage.getItem('toDoList'));
        if (storedToDoList && storedToDoList.length > 0) {
            context.state(storedToDoList);
        }
    }, [context]);
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div className="card text-white bg-dark border border-white" style={{ width: "50rem" }}>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" aria-describedby="button-addon2" placeholder="Enter text for add ToDo" value={inputValue} onChange={handleChange} />
                                <button className="btn btn-primary" id="button-addon2" type="submit">Add</button>
                            </div>
                        </form>
                        <ul className='list-group'>
                            {context.text.map((item, index) => (
                                <div key={index}>
                                    <li key={index} class="list-group-item bg-dark text-white d-flex justify-content-between align-items-center">
                                        {item}
                                        <span onClick={(event) => handleDelete(event, index)} class="badge bg-primary rounded-pill">Delete</span>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
