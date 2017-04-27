import React from 'react'

class EditableHeading extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			input: props.text,
			focused: false
		}

		this.focus = this.focus.bind(this)
		this.blur = this.blur.bind(this)
		this.input = this.input.bind(this)
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
	}

	input(event) {
		this.setState({input: event.target.value})
	}

	render() {
		return (
			<div className="EditableHeading">
				{ this.state.focused ? (
					<input type="text" className="EditableHeading--input" value={this.state.input} onChange={this.input} onBlur={this.blur} ref="input" />
				) : (
					<h2 className={this.props.className} onClick={this.focus}>{this.state.input}</h2>
				)}
			</div>
		)
	}
}

export default EditableHeading