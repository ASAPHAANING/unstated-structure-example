import * as React from 'react';

import { ButtonContainer } from './btn.container';

interface IButtonProps {
	increment: () => void;
	decrement: () => void;
	count: number;
}

const Button: React.SFC<IButtonProps> = ({ increment, decrement, count }) => {
	return (
		<div>
			<button onClick={increment}>+</button>
			<h1>{count}</h1>
			<button onClick={decrement}>-</button>
		</div>
	);
};

export default Button;
