import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './views/header/Header';
import stimppabackground from '@assets/stimppabackground.png';

const App = () => {
	return (
		<div>
			<div className="d-flex justify-content-center">
				<Header />
			</div>
			<div className="d-flex justify-content-center">
				<Outlet />
			</div>
		</div>
	);
};

export default App;
