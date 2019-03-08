import React from 'react';

import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';








class App extends React.Component {
 
  constructor() {
    super();
    this.state = {
      todos: [  {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }],
      task: '',
    }
  }

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
    
  }

  addToList = event => {
    event.preventDefault();
    let newList = {
      task: this.state.task,
      id: Date.now()
    }
    this.setState({ todos: [...this.state.todos, newList], task: ''});
  }




    toggleHandler = itemId => {
      this.setState(prevState => {
        return {
          todos: prevState.todos.map(todo => {
            if(todo.id === itemId) {
              return {
                ...todo,
                completed: !todo.completed
              };
            } else {
              return todo;
            }
          })
        }
      })
    }
   
 

    removeHandler = (e) => {
      e.preventDefault();
      this.setState(prevState => {
        return {
          todos: prevState.todos.filter(todo => {
            return !todo.completed;
          })
        }
      })
    }
  

  render() {
    return (
      <div>
        <ToDoList data={this.state.todos} 
                  toggle={this.toggleHandler}  />
        <ToDoForm inputChange ={this.inputChangeHandler}  
                  addToList={this.addToList} 
                  stateTask={this.state.task}
                  removeHandler={this.removeHandler}
/>
      </div>
    );
  }
}

export default App;


