import React from 'react';

import { ButtonContainer } from './btn.container';

const Button = () => {
	const useButtonContainer = ButtonContainer.useContainer();
	return (
		<div>
			<button onClick={useButtonContainer.increment}>+</button>
			<h1>{useButtonContainer.count}</h1>
			<button onClick={useButtonContainer.decrement}>-</button>
		</div>
	);
};

export default Button;
