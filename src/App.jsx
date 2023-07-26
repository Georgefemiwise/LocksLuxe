import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Detail from './pages/Detail';

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' index element={<Home />} />
				<Route path='/products'  element={<Product />}>
					<Route path='detail' element={<Detail />} />
				</Route>
				{/* <Route path='*' element={<NoMatch />} />{' '} */}
				{/* Uncomment if you have a NoMatch component */}
			</Routes>
		</>
	);
}
