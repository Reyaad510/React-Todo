// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo';


const ToDoList = props => {
   
    return (
        <div>
            <h1>Todo List: MVP</h1>
            {props.data.map(data => (
                <ToDo list={data} key={data.id} toggle={props.toggle} />
            ))}
        
        </div>
    );
}

export default ToDoList;

