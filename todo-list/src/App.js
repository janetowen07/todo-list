import React, { Component } from 'react';
import './App.css';

import Todo from './component/Todo';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    todos: this.props.todos
  };
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
                />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
