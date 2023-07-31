import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { wigData } from '../wigData';
import Checkout from './Checkout';

export default function Cart({ cartItemsList }) {
	const [cartItems, setCartItems] = useState(wigData || []);

	// Function to add an item to the cart
	const addToCart = (product) => {
		setCartItems([...cartItems, product]);
	};

	// Function to remove an item from the cart
	const removeFromCart = (productId) => {
		const updatedCart = cartItems.filter(
			(item) => item.wig_id !== productId,
		);
		setCartItems(updatedCart);
	};

	console.log('Adding to cart:', cartItems);

	// console.log(wigData);

	return (
		<div className='mt-10 px-10'>
			<h2 className='font-black text-4xl'>Cart</h2>
			<Link
				className='w-fit border border-neutral rounded px-4 hover:text-primary'
				to={'/products'}>
				{'< '}Go back to menu
			</Link>
			{cartItems.length === 0 ? (
				<p className='mt-10 text-center'>Your cart is empty.</p>
			) : (
				<ul className='mt-10'>
					{cartItems.map((item) => (
						<li
							className=' flex justify-between items-center hover:bg-neutral-focus px-3 my-2'
							key={item.wig_id}>
							<span>{item.wig_name}</span>
							<button
								className='btn btn-sm btn-error'
								onClick={() =>
									removeFromCart(item.wig_id)
								}>
								Remove
							</button>
						</li>
					))}
				</ul>
			)}
			<Link className='btn btn-success' to='checkout'>
				Checkout
			</Link>
		</div>
	);
}
