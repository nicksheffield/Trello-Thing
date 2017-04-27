import React from 'react'
import ItemList from './ItemList.jsx'
import ItemForm from './ItemForm.jsx'
import EditableHeading from './EditableHeading.jsx'

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
				<EditableHeading text={board.name} className="Board--heading" />

				<ItemList items={board.items} board={board} removeItem={removeItem} />
				<ItemForm board={board} addItem={addItem} />
			</div>
		)
	}
}

export default Board