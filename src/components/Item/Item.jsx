import React from 'react';
import './Item.css';

const Item = ({ value, handleClick }) => {
	return (
		<div className="item" onClick={handleClick}>
			<span>{value}</span>
		</div>
	);
};

export default Item;
