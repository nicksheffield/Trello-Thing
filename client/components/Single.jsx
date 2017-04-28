import React from 'react'
import Board from './Board.jsx'

class Single extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		const board = this.props.boards.find((b) => b.id == this.props.params.id)

		return (
			<div>
				{ board ? (
					<Board board={board} {...this.props} />
				) : null }
			</div>
		)
	}
}

export default Single