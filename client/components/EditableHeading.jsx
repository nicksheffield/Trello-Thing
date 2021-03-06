import React from 'react'

class EditableHeading extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			input: props.board.name,
			focused: false
		}

		this.focus = this.focus.bind(this)
		this.blur = this.blur.bind(this)
		this.input = this.input.bind(this)
		this.keyup = this.keyup.bind(this)
	}

	componentDidUpdate(){
		if(this.refs.input) {
			this.refs.input.focus()
		}
	}

	focus(event) {
		this.setState({focused: true})
	}

	blur(event) {
		this.setState({focused: false})
		this.props.board.name = this.state.input
		this.props.saveBoard(this.props.board)
	}

	input(event) {
		this.setState({input: event.target.value})
	}

	keyup(event) {
		if(event.which == 13) {
			this.setState({focused: false})
			this.props.board.name = this.state.input
			this.props.saveBoard(this.props.board)
		}
	}

	render() {
		return (
			<div className="EditableHeading">
				{ this.state.focused ? (
					<input type="text" className="EditableHeading--input" ref="input" value={this.state.input} onChange={this.input} onBlur={this.blur} onKeyUp={this.keyup} />
				) : (
					<h2 className={this.props.className} onClick={this.focus}>{this.props.board.name}</h2>
				)}
			</div>
		)
	}
}

export default EditableHeading