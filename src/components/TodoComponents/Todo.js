import React from 'react';

const ToDo = props => {
    console.log(props);
    return (
        <div>
            {props.list.task}
        </div>
    );
}

export default ToDo;