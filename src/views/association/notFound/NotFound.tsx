import React from 'react';
import notFoundStimppa from '@assets/notFoundStimppa.png';

const NotFound = () => {
	return (
		<div
			className="h-100 d-flex align-items-center justify-content-center"
			style={{ marginTop: '300px' }}
		>
			<img src={notFoundStimppa} className="w-25"/>
			<h2>404 - Sivua ei ole olemassa :(</h2>
		</div>
	);
};

export default NotFound;
