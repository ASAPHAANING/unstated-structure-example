import React from 'react';
import './App.css';

import Button from './components/button';
import Display from './components/display';

const App: React.FC = () => {
	return (
		<div className="App">
			<Button />
			<Display />
		</div>
	);
};

export default App;
