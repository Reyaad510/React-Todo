import React from 'react';

const ToDo = props => {

    return (
        <div >
          <li style={props.list.completed ? { textDecoration: 'line-through'} :null}
        onClick={() => props.toggle(props.list.id)}>{props.list.task}</li>
        </div>
    );
}

export default ToDo;