import React from 'react';
import wig from '../assets/wig.png';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function WigCard({
	name,
	price,
	description,
	ratings,
	image,
	id,
	isAvailable,
}) {
	const rate = ({ name, rateing }) => {
		const rates = [];
		for (let i = 0; i < rateing; i++) {
			rates.push(
				<input
					type='radio'
					name={`rating-6-${name}`}
					className='mask mask-star-2 bg-orange-500'
				/>,
			);
		}
		return rates;
	};

	return (
		<>
			<div className='card bg-base-300 shadow-sm hover:shadow-neutral-100'>
				<div
					className={`absolute badge  right-0 m-3  badge-${
						isAvailable && 'success'
					}`}>
					{isAvailable ? 'Avalaiable' : ' Not Available'}
				</div>
				<Link to={`/products/${id}`} className='cursor-pointer '>
					<figure className='px-10s pt-10 '>
						<img
							src={wig}
							alt={`${name}`}
							className='rounded-lg h-60'
						/>
					</figure>
				</Link>
				<div className='card-body'>
					<h2 className='card-title'>{name}</h2>
					<div className='flex justify-between text-sm'>
						<div className='rating rating-sm items-center'>
							{rate(name,5)}
							<span className='ml-2'></span>
						</div>
						<p>{price}</p>
					</div>
					<p>{description}</p>
					<div className='card-actions'>
						<Button value={'buy now'} style={'primary'} />
						<Button value={'add to cart'} style={'outline'} />
					</div>
				</div>
			</div>
		</>
	);
}
