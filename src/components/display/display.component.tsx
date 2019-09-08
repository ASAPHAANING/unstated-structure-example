import React from 'react';

import { ButtonContainer, useButtonContainer } from '../button/btn.container';

const DisplayComponent = () => {
	const { count, decrement, increment } = useButtonContainer();
	return <h1>{count}</h1>;
};

export default DisplayComponent;
