import React from 'react'

class App extends React.Component {
	constructor(props) {
		super(props)

		// State
		this.state = {
			boards: [],
			baseurl: 'http:\/\/localhost:8090'
		}

		// Ajax load data
		fetch(this.state.baseurl + '/api/board')
			.then(res => res.json())
			.then(res => this.setState({boards: res}))

		// Events
		this.addItem      = this.addItem.bind(this)
		this.removeItem   = this.removeItem.bind(this)
		this.addBoard     = this.addBoard.bind(this)
		this.removeBoard  = this.removeBoard.bind(this)
		this.saveBoard    = this.saveBoard.bind(this)
	}

	addItem(item, board) {
		if(item.content.trim() == '') return

		board.items.push(item)

		this.forceUpdate()
		this.saveBoard(board)
	}

	removeItem(item, board) {
		board.items = board.items.filter(i => i !== item)

		this.forceUpdate()
		this.saveBoard(board)
	}

	addBoard() {
		fetch(this.state.baseurl+'/api/board', {method: 'POST'})
			.then(res => res.json())
			.then(res => {
				this.state.boards.push(res)
				this.forceUpdate()
			})
	}

	removeBoard(board) {
		fetch(this.state.baseurl+'/api/board/'+board.id, {method: 'DELETE'})
			.then(res => {
				this.state.boards = this.state.boards.filter(b => b.id !== board.id)
				this.forceUpdate()
			})
	}

	saveBoard(board) {
		fetch(this.state.baseurl+'/api/board/'+board.id, {
			body: JSON.stringify(board),
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
	}

	render() {
		const props = {
			boards:       this.state.boards,
			addItem:      this.addItem,
			addBoard:     this.addBoard,
			removeItem:   this.removeItem,
			removeBoard:  this.removeBoard,
			saveBoard:    this.saveBoard
		}

		return (
			<div>
				{React.cloneElement(this.props.children, props)}
			</div>
		)
	}
}

export default App