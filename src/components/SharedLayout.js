import React from 'react'
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function SharedLayout() {
  return (
		<>
			<Header/>
			<Outlet/>
			<Footer/>
		</>
	);
}

export default SharedLayout