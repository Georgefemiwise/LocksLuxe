import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartItems = () => {
	const [cartItems, setCartItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Fetch cart items using Axios
		const fetchCartItems = async () => {
			try {
				const response = await axios.get(
					'http://127.0.0.1:8000/cartitems/',
				);
				setCartItems(response.data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchCartItems();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}
console.log(cartItems)
	return (
		<div>
			<h1>Cart Items</h1>
			{cartItems.map((item) => (
				<div key={item.id} className='m-1 shadow-white shadow-sm'>
					<h2>{item.product_details.name}</h2>
					<p>Price: ${item.product_details.price}</p>
				</div>
			))}
		</div>
	);
};

export default CartItems;
