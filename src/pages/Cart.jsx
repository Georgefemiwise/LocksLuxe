import React from 'react';

import CartItems from '../components/CartDetails';

export default function Cart() {
	return (
		<div>
			<h1 className='my-10 text-center text-4xl font-bold'>
				Cart Items
			</h1>
			<CartItems />
		</div>
	);
}
