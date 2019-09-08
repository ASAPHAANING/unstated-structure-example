import { useState } from 'react';
import { createContainer } from 'unstated-next';

function Container(initialState = 0) {
	const [ count, setCount ] = useState(initialState);
	const decrement = () => setCount(count - 1);
	const increment = () => setCount(count + 1);
	const asyncTest = async () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				setCount(9001);
				resolve(count);
			}, 2000);
		});
	};
	return { count, decrement, increment, asyncTest };
}

const ButtonContainer = createContainer(Container);

export { ButtonContainer };
