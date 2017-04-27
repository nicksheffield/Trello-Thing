import React from 'react'

class ItemForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			input: ''
		}

		this.updateInput = this.updateInput.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	updateInput(event) {
		this.setState({input: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault()

		const newItem = {
			content: this.state.input
		}

		this.props.addItem(newItem, this.props.board)

		this.setState({input: ''})
	}

	render() {
		const {addItem, board} = this.props

		return (
			<form className="ItemForm" onSubmit={this.handleSubmit}>
				<div className="input-group">
					<input type="text" className="form-control" placeholder="New Item" value={this.state.input} onChange={this.updateInput} />
					<span className="input-group-btn">
						<input type="submit" className="btn btn-primary" value="Add" />
					</span>
				</div>
			</form>
		)
	}
}

export default ItemForm