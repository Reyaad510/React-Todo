// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo';
import ToDoForm from './TodoForm';

const ToDoList = props => {
    console.log(props);
    return (
        <div>
            <h1>Todo List: MVP</h1>
            {props.data.map(data => (
                <ToDo list={data} key={data.id} />
            ))}
            <ToDoForm />
        
        </div>
    );
}

export default ToDoList;

