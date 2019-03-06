import React from 'react';




const ToDoForm = (props) => {
   
    return (
        <form> 
            <input 
             name='task'
             value={props.stateTask} 
             onChange={props.inputChange}
             placeholder="...ToDo">
             </input>
            <button onClick={props.addToList}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}

export default ToDoForm;