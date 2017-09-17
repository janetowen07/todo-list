import React from 'react';

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' onChange={this.handleChange} value={this.state.value}/>
				<button type='submit'>Add</button>
			</form>
		);
	}

	handleChange(e) {
		const value = e.target.value;
		this.setState({
			value: value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		// return early if state is empty
		if (this.state.value.length === 0) return;
		this.props.addTodo(this.state.value);

		// clear the input after adding todo
		this.setState({
			value: ''
		});
	}
}

export default AddTodo;