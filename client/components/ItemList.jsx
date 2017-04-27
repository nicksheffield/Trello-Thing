import React from 'react'
import Item from './Item.jsx'

class ItemList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		const {items, board, removeItem} = this.props

		return (
			<ul className="ItemList">
				{ items.map((item, i) =>
					<Item key={i} item={item} board={board} removeItem={removeItem} />
				)}
			</ul>
		)
	}
}

export default ItemList