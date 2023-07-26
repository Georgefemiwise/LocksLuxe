import React from 'react';
import wig from '../assets/wig.png';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function WigCard({ name, price, description, ratings, image, id}) {
	return (
		<>
			<div className='card bg-base-300 shadow-sm hover:shadow-neutral-100'>
				<Link to={`/products/${id}`} className='cursor-pointer'>
					<figure className='px-10 pt-10'>
						<img
							src={wig}
							alt='Shoes'
							className='rounded-lg'
						/>
						{/* <img
							src={image}
							alt={`${name}`}
							className='rounded-lg'
						/> */}
					</figure>
				</Link>
				<div className='card-body'>
					<h2 className='card-title'>{name}</h2>
					<div className='flex justify-between'>
						<div className='rating rating-sm items-center'>
							<input
								type='radio'
								name={`rating-6-${name}`}
								className='mask mask-star-2 bg-orange-500'
							/>
							<input
								type='radio'
								name={`rating-6-${name}`}
								className='mask mask-star-2 bg-orange-500'
							/>
							<input
								type='radio'
								name={`rating-6-${name}`}
								className='mask mask-star-2 bg-orange-500'
							/>
							<input
								type='radio'
								name={`rating-6-${name}`}
								className='mask mask-star-2 bg-orange-500'
							/>
							<input
								type='radio'
								name={`rating-6-${name}`}
								className='mask mask-star-2 bg-orange-500'
							/>
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
