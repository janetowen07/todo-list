import React from 'react';

import './Todo.css';

const Todo = (props) => {
	const completeClass = props.complete ? 'complete' : '';
	return (
		<li className={completeClass} onClick={handleClick}>
			{props.task}
		</li>
	);

	function handleClick(e) {
		props.toggleTodo(props.index);
	}
}

export default Todo;