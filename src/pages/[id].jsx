import React from 'react';
import Product from '../assets/wig.png';
// import { ProductData } from '../ProductData';
import { useParams, Link } from 'react-router-dom';
import useFetchProducts from '../hooks/useFetchProducts';

export default function Detail({ addToCart }) {
	const { id } = useParams();
	const { products, loading, error } = useFetchProducts(`products/${id}`);

	if (!products) {
		return <div>Product not found.</div>;
	}
	// Helper function to generate rating radio buttons with different background colors
	const getRatings = ( name, star ) => {
		const rates = [];

		for (let i = 1; i <= 5; i++) {
			rates.push(
				<input
					key={i}
					type='radio'
					name={`rating-${name}`}
					className={`mask mask-star ${[i]} ${
						i <= parseInt(star) && 'bg-orange-600'
					}`}
					checked={i === parseInt(star)}
					readOnly
				/>,
			);
		}
		return rates;
	};

	return (
		<div className='card rounded bg-base-300 shadow-sm justify-center  p-10'>
			<div className='md:flex gap-10'>
				<div className='image  '>
					<figure className='p-5 max-w-lg'>
						<img
							src={`../../backend/${products.image}`}
							alt='Shoes'
							className='rounded-lg w-full'
						/>
					</figure>
				</div>
				<div className='details'>
					<div className='card-body'>
							<div className='rating'>
								{getRatings(products.name, '3')}
							</div>
						<h1 className='card-title font-extrabold text-5xl capitalize'>
							{products.name}
						</h1>
						<div className='properties flex flex-wrap gap-1 mt-2'>
							<div className='p-1 rounded-md px-2 text-white bg-neutral'>
								{products.Product_type}
							</div>

							<div className='p-1 rounded-md px-2 text-white bg-neutral'>
								{products.material}
							</div>

							<div className='p-1 rounded-md px-2 text-white bg-neutral'>
								{products.color}
							</div>

							<div className='p-1 rounded-md px-2 text-white bg-neutral'>
								{products.texture}
							</div>

							<div className='p-1 rounded-md px-2 text-white bg-neutral'>
								{products.length}
							</div>
							<div className='p-1 rounded-md px-2 text-white bg-neutral'>
								{products.cap_size}
							</div>

							<div className='p-1 rounded-md px-2 text-white bg-neutral'></div>
						</div>
						<div className='rating items-center my-2'>
							{/* {ratingInputs} */}
						</div>
						<div className='pricing '>
							<h5 className='font-bold text-lg w-1/4 text-white flex justify-between'>
								<span>Price</span>
								{products.price}
							</h5>
						</div>
						<div className='divider'></div>
						<h3>
							<p className='font-bold mb-3'>Description</p>
							{products.description}
						</h3>

						<div className='card-actions btn-group'>
							<button
								className='btn btn-primary'
								onClick={() => addToCart(products)}>
								Add to Cart
							</button>
							<Link
								to='/cart'
								className='btn btn-outline'
								onClick={() => addToCart(products)}>
								view cart
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
