import React from 'react';
import { Link } from 'react-router-dom';
import useAddToCart from '../hooks/useAddToCart';

export default function ProductCard({ availability, id, image, name, price }) {
	const { addCartItem, addingToCart, addingError } = useAddToCart();

	 const handleAddToCart = (productId) => {
			addCartItem(productId);
		};

	return (
		<div className='relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-gray-50 shadow-md font-sans'>
			<Link to={`/products/${id}`}>
				<img
					className='h-60 rounded-t-lg bg-covr w-full m'
					src={`../../backend/${image}`}
					alt={`${name}`}
				/>
			</Link>

			<div className='mt-4 px-5 pb-5 text-black'>
				<Link to={`/products/${id}`}>
					<h5 className='text-xl font-bold tracking-tight  capitalize'>
						{name}
					</h5>
				</Link>
				<div className='mt-2.5 mb-5 flex items-center justify-between'>
					<span
						className={`badge px-1 text-xs  text-white ${
							!availability ? 'bg-neutral' : 'bg-success'
						}`}>
						{availability ? 'Available' : 'Sold'}
					</span>
				</div>
				<div className='flex items-center justify-between'>
					<p>
						<span className='text-xl font-semibold '>
							₵{price}
						</span>
					</p>
					<button
						className='btn'
						onClick={() => handleAddToCart(id)}
						disabled={addingToCart}>
						{addingToCart ? 'Adding...' : 'Add to Cart'}
					</button>
				</div>
			</div>
		</div>
	);
}
