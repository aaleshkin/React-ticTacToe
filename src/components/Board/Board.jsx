import React, { Component } from 'react';
import './Board.css';
import Item from '../Item';

export default class Board extends Component {
	render() {
		const { items, handleClick } = this.props;
		const field = items.map((item, index) => {
			return (
				<Item key={index} value={item} handleClick={() => handleClick(index)} />
			);
		});
		return <div className="board">{field}</div>;
	}
}
