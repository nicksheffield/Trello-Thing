import React from 'react'
import Board from './Board.jsx'

class BoardList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		const {boards} = this.props

		return (
			<div className="BoardList f-r f-js f-as f-r1">
				{ boards.length ? (
					boards.map((board, i) =>
						<Board key={i} board={board} {...this.props} />
					)
				) : (
					<div className="no-boards">No boards</div>
				)}
			</div>
		)
	}
}

export default BoardList