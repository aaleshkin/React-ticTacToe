import React from 'react';
import './InfoPanel.css';

const InfoPanel = ({ winner, history, reset }) => {
	const status = winner ? `Winner is ${winner}` : null;

	return (
		<div>
			<span className="status">{status}</span>
			<div className="buttons">
				<button className="revert-button button" onClick={history}>
					Revert
				</button>
				<button className="reset-button button" onClick={reset}>
					Reset Game
				</button>
			</div>
		</div>
	);
};

export default InfoPanel;
