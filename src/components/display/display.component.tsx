import React from 'react';

import { ButtonContainer } from '../button/btn.container';

const DisplayComponent = () => {
	const useButtonContainer = ButtonContainer.useContainer();
	return (
		<div>
			<h1>{useButtonContainer.count}</h1>
			<button onClick={useButtonContainer.asyncTest}>IT's OVER 9000!!!!</button>
		</div>
	);
};

export default DisplayComponent;
