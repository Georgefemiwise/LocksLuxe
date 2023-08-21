import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Payment from './pages/Payment';
import Detail from './pages/[id]';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import NavBar from './components/NavBar';
import useFetchProducts from './hooks/useFetchProducts';

export default function App() {
	const [cartItems, setCartItems] = useState([]);
	const { products, loading, error } = useFetchProducts();

	// Function to remove an item from the cart
	const removeFromCart = (productId) => {
		const updatedCart = cartItems.filter(
			(item) => item.Product_id !== productId,
		);
		setCartItems(updatedCart);
	};
	return (
		<div className='font-sans'>
			<div className=' fixed w-full z-50'>
				<NavBar cartItemCount={cartItems.length} />
			</div>
			<div className='grid justify-center  min-h-screen md:px-32 py-24 '>
				<Routes>
					<Route path='/' index element={<Home />}></Route>
					<Route path='/products' element={<Product />} />
					<Route path='/payment' element={<Payment />} />
					<Route path='/products/:id' element={<Detail />} />

					<Route
						path='/cart'
						element={<Cart cartItemsList={cartItems} />}
					/>
					<Route path='/cart/checkout' element={<Checkout />} />

					<Route path='*' element={<h1>notfound</h1>} />
				</Routes>
			</div>
		</div>
	);
}
