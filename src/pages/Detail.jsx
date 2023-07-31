import React from 'react';
import wig from '../assets/wig.png';
import { wigData } from '../wigData';
import { useParams, Link } from 'react-router-dom';

export default function Detail({ addToCart }) {
	const { id } = useParams();

	const productId = id; // No need to parse as it's already a string

	const selectedProduct = wigData.find((p) => p.wig_id === productId);

	if (!selectedProduct) {
		return <div>Product not found.</div>;
	}

	return (
		<div className='card  mt-10 justify-center  md:px-40 px-10'>
			<Link
				className='w-fit border border-neutral px-4 hover:text-primary'
				to={'/products'}>
				{'< '}Go Back
			</Link>
			<div className='md:flex gap-10'>
				<div className='image  '>
					<figure className='p-5 '>
						<img
							src={wig}
							alt='Shoes'
							className='rounded-lg w-full'
						/>
					</figure>
				</div>
				<div className='details'>
					<div className='card-body'>
						<h1 className='card-title font-extrabold text-5xl'>
							{selectedProduct.wig_name}
						</h1>
						<div className='rating rating-sm items-center'>
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
						</div>
						<div className='pricing '>
							<h5 className='mb-3 '>
								<span>Price</span>{' '}
								{selectedProduct.price}
							</h5>
							<div className='cartigory capitalize  gap-2 items-center'>
								<div className='flex justify-between mt-1 border-t items-center'>
									material{' '}
									<span className='badge badge-secondary'>
										{selectedProduct.wig_type}
									</span>
								</div>
								<div className='flex justify-between mt-1 border-t items-center'>
									Type{' '}
									<span className='badge badge-secondary'>
										{selectedProduct.material}
									</span>
								</div>
								<div className='flex justify-between mt-1 border-t items-center'>
									color{' '}
									<span className='badge badge-secondary'>
										{selectedProduct.color}
									</span>
								</div>
								<div className='flex justify-between mt-1 border-t items-center'>
									texture{' '}
									<span className='badge badge-secondary'>
										{selectedProduct.texture}
									</span>
								</div>
								<div className='flex justify-between mt-1 border-t items-center'>
									length{' '}
									<span className='badge badge-secondary'>
										{selectedProduct.length}
									</span>
								</div>
								<div className='flex justify-between mt-1 border-t items-center'>
									cap size{' '}
									<span className='badge badge-secondary'>
										{selectedProduct.cap_size}
									</span>
								</div>
								<div className='flex justify-between mt-1 border-t items-center'>
									density{' '}
									<span className='badge badge-secondary'>
										{selectedProduct.density}
									</span>
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
