import React from 'react';

const Auth = ({ children }) => {
	return (
		<>
			<header>Auth Header</header>
			{children}
			<footer>Auth Footer</footer>
		</>
	);
};

export default Auth;
