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
			'bg-red-100',
			'bg-blue-100',
			'bg-green-100',
			'bg-yellow-100',
			'bg-purple-100',
		];
		for (let i = 1; i <= 5; i++) {
			rates.push(
				<input
					key={i}
					type='radio'
					name={`rating-${name}`}
					className={`mask ${
						i <= parseInt(star) && ' mask-star-2'
					} mask-star ${colors[i - 1]}`}
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
			<div className='card rounded-lg bg-base-300 shadow-sm  overflow-hidden group'>
				<div
					className={`absolute badge right-0 m-3 ${
						isAvailable && 'badge-success'
					}`}>
					{isAvailable ? 'Available' : 'Not Available'}
				</div>
				<Link to={`/products/${id}`} className='cursor-pointer'>
					<figure className='px-10 pt-10'>
						<img
							src={wig}
							alt={`${name}`}
							className='rounded-sm w-full'
						/>
					</figure>
				</Link>
				<div className='card-body'>
					<div className=' justify-between text-sm'>
						<div className='rating rating-xs items-center '>
							{/* Render the generated rating radio buttons */}
							{ratingInputs}
							<span className='ml-2'>
								{/* ({rating.comments}) */}
							</span>
						</div>
						<h2 className='card-title text-sm'>{name}</h2>
						<p className='text-lg'>Ghc {price}</p>
					</div>
					
					<div className='card-actions  '>
					
						<div className="btn btn-primary w-full rounded-none border-t-2 group-hover:border-t-red-100">add to cart</div>
						{/* <Button
							value={'add to cart'}style={'primary'}
							onClick={() => addToCart(id)}
						/> */}
					</div>
				</div>
			</div>
		</>
	);
}
