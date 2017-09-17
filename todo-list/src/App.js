import React, { Component } from 'react';
import './App.css';

import Todo from './component/Todo';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    todos: this.props.todos
  };
  this.toggleTodo = this.toggleTodo.bind(this);
}

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
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
