import React from 'react';

import ButtonComponent from './btn.component';
import { ButtonContainer } from './btn.container';

const Button = () => {
	const useButtonContainer = ButtonContainer.useContainer();

	return (
		<ButtonComponent
			increment={useButtonContainer.increment}
			decrement={useButtonContainer.decrement}
			count={useButtonContainer.count}
		/>
	);
};

export default Button;
