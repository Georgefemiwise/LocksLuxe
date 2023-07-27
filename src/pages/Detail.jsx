import React from 'react';
import wig from '../assets/wig.png';
import { wigData } from '../wigData';
import { useParams } from 'react-router-dom';

export default function Detail({ addToCart }) {
	const { id } = useParams();

	const productId = id; // No need to parse as it's already a string

	const selectedProduct = wigData.find((p) => p.wig_id === productId);

	if (!selectedProduct) {
		return <div>Product not found.</div>;
	}

	return (
		<div className='flex  justify-center max-h-screen px-40'>
			<div className='grid grid-cols-3 gap-10'>
				<div className='image '>
					<figure className='p-5 '>
						<img
							src={wig}
							alt='Shoes'
							className='rounded-lg'
						/>
					</figure>
				</div>
				<div className='details col-span-2'>
					<div className='card-body'>
						<h1 className='card-title font-extrabold text-5xl'>
							{selectedProduct.wig_name}
						</h1>
						{/* <div className='rating rating-sm items-center'>
							<input
								type='radio'
								name='rating-6'
								className='mask mask-star-2 bg-orange-400'
							/>
							<input
								type='radio'
								name='rating-6'
								className='mask mask-star-2 bg-orange-400'
								checked
							/>
							<input
								type='radio'
								name='rating-6'
								className='mask mask-star-2 bg-orange-400'
							/>
							<input
								type='radio'
								name='rating-6'
								className='mask mask-star-2 bg-orange-400'
							/>
							<input
								type='radio'
								name='rating-6'
								className='mask mask-star-2 bg-orange-400'
							/>
						</div> */}
						<div className='pricing '>
							<h5 className='mb-3 '>
								<span>Price</span>{' '}
								{selectedProduct.price}
							</h5>
							<div className='cartigory flex gap-2 items-center'>
								<h5 className=''>Type</h5>
								<div className='badge badge-secondary'>
									{selectedProduct.wig_type}
								</div>
							</div>
						</div>
						<div className='divider'></div>
						<h3>
							<p className='font-bold mb-3'>Description</p>
							{selectedProduct.description}
						</h3>

						<div className='card-actions'>
							<button className='btn btn-primary'>
								Buy Now
							</button>

							<button
								className='btn btn-outline'
								onClick={() =>
									addToCart(selectedProduct)
								}>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
