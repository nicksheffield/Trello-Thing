import React from 'react'

class Item extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		const {item, board, removeItem} = this.props

		return (
			<li className="Item f-r f-jb f-ac">
				<span className="Item--content">{item.content}</span>
				<span className="Item--controls">
					<button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(item, board)}><i className="fa fa-times"></i></button>
				</span>
			</li>
		)
	}
}

export default Item