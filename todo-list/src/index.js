import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const todos = [
	{task: 'Make coffee', complete: true},
	{task: 'Learn React', complete: true},
	{task: 'Go to sleep', complete: false}
  ];

ReactDOM.render(<App todos={todos}/>, document.getElementById('root'));
registerServiceWorker();
