import React from 'react';

const ToDo = props => {

    return (
        <div>
            {props.list.task}
        </div>
    );
}

export default ToDo;