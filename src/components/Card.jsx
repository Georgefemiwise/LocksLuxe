import React from 'react';
import Svg from '../assets/svg.svg';
import wig from '../assets/wig.png';
import Button from './Button';
import { Link } from 'react-router-dom';

// A component to display a wig card with details and ratings
export default function WigCard({
	name,
	price,
	description,
	rating,
	image,
	id,
	isAvailable,
	addToCart,
}) {
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
					className={`mask mask-heart ${colors[i]} ${
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
	const stars = rating.stars;

	// Generating the rating radio buttons with background colors based on the star rating
	const ratingInputs = getRatings({ name, star: stars });

	return (
		<>
			<div className='card bg-base-300 shadow-sm hover:shadow-neutral-100'>
				<div
					className={`absolute badge  right-0 m-3 ${
						isAvailable && 'badge-success'
					}`}>
					{isAvailable ? 'Available' : 'Not Available'}
				</div>
				<Link to={`/products/${id}`} className='cursor-pointer'>
					<figure className='px-10 pt-10'>
						<img
							src={wig}
							alt={`${name}`}
							className='rounded-lg h-60'
						/>
					</figure>
				</Link>
				<div className='card-body'>
					<h2 className='card-title'>{name}</h2>
					<div className=' justify-between text-sm'>
						<div className='rating rating-sm items-center '>
							{/* Render the generated rating radio buttons */}
							{ratingInputs}
							<span className='ml-2'>
								({rating.comments})
							</span>
						</div>
						<p className='text-secondary'>{price}</p>
					</div>
					<p>{description.slice(0, 50) + '...'}</p>
					<div className='card-actions'>
						<Button value={'buy now'} style={'primary'} />
						<Button
							value={'add to cart'}
							onClick={() => addToCart(id)}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
