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

	return (
		<div className='mt-10 px-10'>
			<div className='w-full my-5'>
				<h2 className='font-black text-4xl'>Cart</h2>
			</div>

			{cartItems.length === 0 ? (
				<p className='mt-10 text-center'>Your cart is empty.</p>
			) : (
				<div className='mt-10 flex flex-col justify-center items-center'>
					<div className='overflow-x-auto w-4/5 '>
						<table className='table table-sm '>
							{/* head */}
							<thead>
								<tr>
									<th></th>
									<th>Name</th>
									<th>Amount</th>
									<th>Price</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{cartItems.map((item, index) => (
									<tr key={item.wig_id}>
										<th>{index + 1}</th>
										<td>{item.wig_name}</td>
										<td>
											<input
												className='input input-primary'
												type='number'
												name='amount'
												id='amount'
												valur=''
											/>
										</td>
										<td>5</td>
										<td className='float-right'>
											<button
												className='btn btn-sm btn-error'
												onClick={() =>
													removeFromCart(
														item.wig_id,
													)
												}>
												Remove
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
			<div className='flex gap-3 w-1/4 pl-32'>
				<Link className='btn btn-outline' to={'/products'}>
					Go back
				</Link>
				<Link className='btn btn-success' to='checkout'>
					Checkout
				</Link>
			</div>
		</div>
	);
}
