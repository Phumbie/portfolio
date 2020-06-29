import React from 'react';

const Nav = () => {
	const expand = {
		height: '100%',
		width: '100%'
	};

	return (
		<div className="nav">
			<marquee behavior="scroll" direction="left">
				work still in progress
			</marquee>

			{/* <div className="logo">
				<img style={expand} src="/images/logo-name.svg" alt="logo" />
			</div> */}
			<div className="menu">
				<img style={expand} src="/images/menu.svg" alt="menu" />
			</div>
		</div>
	);
};
export default Nav;
