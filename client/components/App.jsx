import React from 'react'
import Board from './Board.jsx'
import data from '../data/boards.json'

class App extends React.Component {
	constructor(props) {
		super(props)

		// State
		this.state = {
			boards: data
		}

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
			<div className="App">
				<h1 className="App--heading">Trello Thing</h1>

				<div className="f-r f-js f-as">
					{ this.state.boards.length ? (
						this.state.boards.map((board, i) =>
							<Board key={i} board={board} {...props} />
						)
					) : (
						<p>No boards</p>
					)}

					<button className="btn btn-success" onClick={this.addBoard}>
						<i className="fa fa-plus"></i> New Board
					</button>
				</div>
			</div>
		)
	}
}

export default App