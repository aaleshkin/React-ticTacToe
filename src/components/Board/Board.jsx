import React from 'react';
import './Board.css';
import Item from '../Item';

const Board = ({ items, handleClick }) => {
	const field = items.map((item, index) => {
		return (
			<Item key={index} value={item} handleClick={() => handleClick(index)} />
		);
	});

	return <div className="board">{field}</div>;
};

export default Board;
