import React, { Component } from 'react';
import './App.css';

import Todo from './component/Todo';
import AddTodo from './component/AddTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos
    };
    this.toggleTodo = this.toggleTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <AddTodo addTodo={this.addTodo} />
        <ul>
          {this.state.todos.map((todo, i) => {
            return (
              <Todo key={i}
                task={todo.task}
                complete={todo.complete}
                toggleTodo={this.toggleTodo}
                index={i}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  addTodo(newTask) {
    const newTodo = {
      task: newTask, complete: false
    };
    const newTodos = this.state.todos.concat(newTodo);
    this.setState({
      todos: newTodos
    });
  }
  toggleTodo(index) {
    const newTodos = this.state.todos.map((todo, i) => {
      if (i === index) {
        return Object.assign({}, todo, {
          complete: !todo.complete
        });
      }
      return todo;
    });
    this.setState({
      todos: newTodos
    });
  }


}

export default App;
