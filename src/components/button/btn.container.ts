import { useState } from 'react';
import { createContainer } from 'unstated-next';

function Container(initialState = 0) {
	let [ count, setCount ] = useState(initialState);
	let decrement = () => setCount(count - 1);
	let increment = () => setCount(count + 1);
	return { count, decrement, increment };
}

const ButtonContainer = createContainer(Container);
// const useButtonContainer = ButtonContainer.useContainer();

const useButtonContainer = () => {
	const btn_container = ButtonContainer.useContainer();
	return btn_container;
};

export { ButtonContainer, useButtonContainer };
