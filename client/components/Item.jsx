import React from 'react'
import $ from 'jQuery/dist/jquery'

class Item extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	componentDidMount() {
		$(this.refs.li).slideUp(0).slideDown(100)
	}

	render() {
		const {item, board, removeItem} = this.props

		return (
			<li className="Item f-r f-jb f-ac" ref="li">
				<span className="Item--content">{item.content}</span>
				<span className="Item--controls">
					<button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(item, board)}><i className="fa fa-times"></i></button>
				</span>
			</li>
		)
	}
}

export default Item