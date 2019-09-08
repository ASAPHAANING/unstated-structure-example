import React from 'react';

import { ButtonContainer } from '../button/btn.container';

const DisplayComponent = () => {
	const useButtonContainer = ButtonContainer.useContainer();
	return <h1>{useButtonContainer.count}</h1>;
};

export default DisplayComponent;
