import React from 'react';

import { ButtonContainer, useButtonContainer } from './btn.container';

const Button = () => {
	// const useButtonContainer = ButtonContainer.useContainer();
	const { count, decrement, increment } = useButtonContainer();
	return (
		<div>
			<button onClick={increment}>+</button>
			<h1>{count}</h1>
			<button onClick={decrement}>-</button>
		</div>
	);
};

export default Button;
