import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Quick from './components/quick';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

const App = () => {
	return (
		<div>
			<Header />
			<About />
			<Quick />
			<Portfolio />
			<Contact />
		</div>
	);
};

export default App;
