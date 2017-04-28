import React from 'react'
import BoardList from './BoardList.jsx'

class Main extends React.Component {
	constructor(props) {
		super(props)

		// State
		this.state = {

		}
	}

	render() {
		const props = {
			addItem: this.props.addItem,
			removeItem: this.props.removeItem,
			removeBoard: this.props.removeBoard,
			saveBoard: this.props.saveBoard
		}

		return (
			<div className="App f-r1 f-c">
				<div className="App--heading f-r f-ac f-jb">
					<h1>Trello Thing</h1>

					<button className="btn btn-success btn-icon" onClick={this.props.addBoard}>
						<i className="fa fa-plus"></i> New board
					</button>
				</div>
				
				<BoardList boards={this.props.boards} {...props} />
			</div>
		)
	}
}

export default Main