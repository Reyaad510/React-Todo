import React from 'react';

const ToDo = props => {

    return (
        <div onClick={props.toggle}>
            {props.list.task}
        </div>
    );
}

export default ToDo;