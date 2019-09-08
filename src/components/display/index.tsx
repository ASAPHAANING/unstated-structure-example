import React from 'react';

import { ButtonContainer } from '../button/btn.container';
import DisplayComponent from './display.component';

const Display = () => {
	return (
		<ButtonContainer.Provider>
			<DisplayComponent />
		</ButtonContainer.Provider>
	);
};

export default Display;
