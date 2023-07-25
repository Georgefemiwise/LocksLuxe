import React from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Detail from './pages/Detail';
import { wigData } from './wigData';
import { ProductList } from './components/ProductList';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainFrame />}>
					<Route path='/' index element={<Home/>} />
					<Route path='/products' index element={<Produ/>} />
					
					<Route path='*' element={<NoMatch />} />
				</Route>
			</Routes>
		</>
	);
}
