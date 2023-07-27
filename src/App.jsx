import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
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
			<NavBar cartItemCount={cartItems.length} />

			<Routes>
				<Route path='/' index element={<Home />} />
				<Route path='/products' element={<Product />} />
				<Route
					path='/products/:id'
					element={<Detail addToCart={addToCart} />}
				/>

				<Route
					path='/cart'
					element={<Cart cartItemsList={cartItems} />}
				/>

				<Route path='*' element={<h1>notfound</h1>} />
			</Routes>
		</>
	);
}
