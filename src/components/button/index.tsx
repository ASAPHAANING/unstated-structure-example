import React from 'react';

import ButtonComponent from './btn.component';
import { ButtonContainer } from './btn.container';

const Button = () => {
	return (
		<ButtonContainer.Provider>
			<ButtonComponent />
		</ButtonContainer.Provider>
	);
};

export default Button;
