import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Payment from './pages/Payment';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import NavBar from './components/NavBar';

export default function App() {
	const [cartItems, setCartItems] = useState([]);

	// Function to add an item to the cart
	const addToCart = (product) => {
		setCartItems([...cartItems, product]);
	};
	console.log('cartItems:', cartItems);
	// Function to remove an item from the cart
	const removeFromCart = (productId) => {
		const updatedCart = cartItems.filter(
			(item) => item.wig_id !== productId,
		);
		setCartItems(updatedCart);
	};
	return (
		<>
			<div className=' fixed w-full z-50'>
				<NavBar cartItemCount={cartItems.length} />
			</div>
			<div className='grid justify-center  min-h-screen px-32 py-24 '>
				<Routes>
					<Route path='/' index element={<Home />}></Route>
					<Route
						path='/products'
						element={<Product addToCart={addToCart} />}
					/>
					<Route
						path='/payment'
						element={<Payment addToCart={addToCart} />}
					/>
					<Route
						path='/products/:id'
						element={<Detail addToCart={addToCart} />}
					/>

					<Route
						path='/cart'
						element={<Cart cartItemsList={cartItems} />}>
						<Route path='checkout' element={<Checkout />} />
					</Route>

					<Route path='*' element={<h1>notfound</h1>} />
				</Routes>
			</div>
		</>
	);
}
