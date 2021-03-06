import React from 'react'
import ItemList from './ItemList.jsx'
import ItemForm from './ItemForm.jsx'
import EditableHeading from './EditableHeading.jsx'
import {Link} from 'react-router'

class Board extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		const {board, addItem, removeItem} = this.props
		return (
			<div className="Board f-c">
				<EditableHeading className="Board--heading" board={board} saveBoard={this.props.saveBoard} />

				<div className="Board--delete">
					<button className="btn btn-outline-danger btn-sm" onClick={() => this.props.removeBoard(board)}>
						<i className="fa fa-trash-o"></i>
					</button>
				</div>

				<ItemList items={board.items} board={board} removeItem={removeItem} />

				<Link to={"/single/" + board.id}>View alone</Link>

				<ItemForm board={board} addItem={addItem} />
			</div>
		)
	}
}

export default Board