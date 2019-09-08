import React from 'react';

import { ButtonContainer } from '../components/button/btn.container';

export default function GlobalState({ children }) {
	return <ButtonContainer.Provider>{children}</ButtonContainer.Provider>;
}
