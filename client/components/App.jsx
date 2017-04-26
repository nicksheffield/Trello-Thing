import React from 'react'

class App extends React.Component {
	constructor(props) {
		super(props)

		// State
		this.state = {
			
		}

		// Events
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(propName) {
		return function(event) {
			let newState = {}
			newState[propName] = event.target.value
			this.setState(newState);
		}.bind(this)
	}

	render() {
		return (
			<div>
				
			</div>
		)
	}
}

export default App