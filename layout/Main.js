import React from 'react';

const Main = ({ children }) => {
	return (
		<>
			<header>Main Header</header>
			{children}
			<footer>Main Footer</footer>
		</>
	);
};

export default Main;
