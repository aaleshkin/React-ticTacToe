import React, { Component } from 'react';
import './App.css';
import Board from '../Board';

export default class App extends Component {
	state = {
		move: 0,
		winner: '',
		items: [new Array(9).fill(null)],
	};

	handleClick = i => {
		this.setState(({ move, items, winner }) => {
			if (items[move][i] || winner) {
				console.log('existed');
				console.log(items);
				
				return;
			}

			const newItems = JSON.parse(JSON.stringify(items));
			const newArr = JSON.parse(JSON.stringify(items[move]));
			const newMove = move + 1;

			newArr[i] = move % 2 === 0 ? '✕' : '○';
			newItems[newMove] = newArr;

			return {
				move: newMove,
				items: newItems,
			};
		});
	};

	history = () => {
		this.setState(({ move }) => {
			const newMove = move - 1;

			if (newMove >= 0) {
				return {
					move: newMove,
				};
			}
		});
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.move !== this.state.move) {
			this.checkWin();
		}
	}

	checkWin = () => {
		const { items, move } = this.state;
		const squares = items[move];

		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				console.log(squares[a]);
				return this.setState({
					winner: squares[a],
				});
			}
		}
		return null;
	};

	reset = () => {
		this.setState(() => {
			return {
				items: [new Array(9).fill(null)],
				winner: '',
				move: 0,
			};
		});
	};

	render() {
		const { move, items, winner } = this.state;
		const status = winner ? <span>Winner is {winner}</span> : null;
		const currentMove = items[move];

		return (
			<div className="app">
				<h1 style={{ textAlign: 'center' }}>Tic-Tac-Toe</h1>
				<span>{status}</span>
				<Board items={currentMove} handleClick={this.handleClick} />
				<div className="buttons">
					<button className="revert-button button" onClick={this.history}>
						Revert
					</button>
					<button className="reset-button button" onClick={this.reset}>
						Reset Game
					</button>
				</div>
			</div>
		);
	}
}
