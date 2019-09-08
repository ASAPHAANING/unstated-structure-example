import React from 'react';
import './App.css';

import Button from './components/button';
import Display from './components/display';

import GlobalState from './context';

const App: React.FC = () => {
	return (
		<div className="App">
			<GlobalState>
				<Button />
				<Display />
			</GlobalState>
		</div>
	);
};

export default App;
