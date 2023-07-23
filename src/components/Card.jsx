import React from 'react' 
import wig from '../assets/wig.png'

export default function Card() {
  return (
		<>
			<div className='card bg-base-300 shadow-sm hover:shadow-neutral-200'>
				<figure className='px-10 pt-10'>
					<img src={wig} alt='Shoes' className='rounded-lg' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>Dommy Name</h2>
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
					  <span className='ml-2'>34</span>
					</div>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className='card-actions'>
						<button className='btn btn-primary'>
							Buy Now
						</button>
						<button className='btn btn-outline'>
							add to cart
						</button>
					</div>
				</div>
			</div>
		</>
  );
}
