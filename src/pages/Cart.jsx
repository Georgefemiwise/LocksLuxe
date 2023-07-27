import React, { useState } from 'react';

export default function Cart({ cartItemsList }) {
	const [cartItems, setCartItems] = useState(cartItemsList || []);

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

	console.log(cartItemsList);

	return (
		<div className='mt-10'>
			<h2>Cart</h2>
			{cartItems.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<ul>
					{cartItems.map((item) => (
						<li key={item.wig_id}>
							<span>{item.wig_name}</span>
							<button
								onClick={() =>
									removeFromCart(item.wig_id)
								}>
								Remove
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
