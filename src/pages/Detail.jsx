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
	// Helper function to generate rating radio buttons with different background colors
	const getRatings = ({ name, star }) => {
		const rates = [];
		const colors = [
			'bg-red-500',
			'bg-blue-500',
			'bg-green-500',
			'bg-yellow-500',
			'bg-purple-500',
		];
		for (let i = 1; i <= 5; i++) {
			rates.push(
				<input
					key={i}
					type='radio'
					name={`rating-${name}`}
					className={`mask mask-star ${colors[i]} ${
						i >= parseInt(star) && 'bg-neutral-focus'
					}`}
					checked={i === parseInt(star)}
					readOnly
				/>,
			);
		}
		return rates;
	};
	// Extracting the star rating from the 'rating' prop
	const stars = selectedProduct.ratings.stars;

	// Generating the rating radio buttons with background colors based on the star rating
	const ratingInputs = getRatings({
		name: selectedProduct.wig_name,
		star: stars,
	});

	return (
		<div className='card rounded bg-base-300 shadow-sm justify-center  p-10'>
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
						<div className='properties flex flex-wrap gap-1 mt-2'>
							<div className='p-1 rounded-md px-2 text-white bg-neutral'>
								{selectedProduct.wig_type}
							</div>

							<div className='p-1 rounded-md px-2 text-white bg-neutral'>
								{selectedProduct.material}
							</div>

							<div className='p-1 rounded-md px-2 text-white bg-neutral'>
								{selectedProduct.color}
							</div>

							<div className='p-1 rounded-md px-2 text-white bg-neutral'>
								{selectedProduct.texture}
							</div>

							<div className='p-1 rounded-md px-2 text-white bg-neutral'>
								{selectedProduct.length}
							</div>
							<div className='p-1 rounded-md px-2 text-white bg-neutral'>
								{selectedProduct.cap_size}
							</div>

							<div className='p-1 rounded-md px-2 text-white bg-neutral'>
								{selectedProduct.density}
							</div>
						</div>
						<div className='rating items-center my-2'>
							{ratingInputs}
						</div>
						<div className='pricing '>
							<h5 className='font-bold text-lg w-1/4 text-white flex justify-between'>
								<span>Price</span>
								{selectedProduct.price}
							</h5>
						</div>
						<div className='divider'></div>
						<h3>
							<p className='font-bold mb-3'>Description</p>
							{selectedProduct.description}
						</h3>

						<div className='card-actions '>
							<button
								className='btn btn-primary'
								onClick={() =>
									addToCart(selectedProduct)
								}>
								Add to Cart
							</button>
							<Link to='/cart'
								className='btn btn-outline'
								onClick={() =>
									addToCart(selectedProduct)
								}>
								view cart
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
