import React from 'react'
import BoardList from './BoardList.jsx'

class App extends React.Component {
	constructor(props) {
		super(props)

		// State
		this.state = {
			boards: []
		}

		fetch('http:\/\/localhost:8090/api/board').then((res) => {
			res.json().then((json) => {
				this.setState({boards: json})
			})
		})

		// Events
		this.addItem = this.addItem.bind(this)
		this.removeItem = this.removeItem.bind(this)
		this.addBoard = this.addBoard.bind(this)
	}

	addItem(item, board) {
		if(item.content.trim() == '') return

		board.items.push(item)

		this.forceUpdate()
	}

	removeItem(item, board) {
		board.items = board.items.filter(i => i !== item)

		this.forceUpdate()
	}

	addBoard() {
		this.state.boards.push({
			name: 'New Board',
			items: []
		})

		this.forceUpdate()
	}

	render() {
		const props = {
			addItem: this.addItem,
			removeItem: this.removeItem
		}

		return (
			<div className="App f-r1 f-c">
				<div className="f-r f-ac f-jb App--heading">
					<h1>Trello Thing</h1>

					<button className="btn btn-success btn-icon" onClick={this.addBoard}>
						<i className="fa fa-plus"></i> New board
					</button>
				</div>
				
				<BoardList boards={this.state.boards} {...props} />
			</div>
		)
	}
}

export default App