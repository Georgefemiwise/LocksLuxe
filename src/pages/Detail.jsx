import React from 'react';
import wig from '../assets/wig.png';
export default function Detail() {
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
							Dommy Name
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
							<span className='ml-2'>34</span>
						</div>
						<div className='pricing cartigory'>
							<h5 className='mb-3 '>
								<span>Price</span> 50 ghc
							</h5>
							<div className="badge badge-secondary">human</div>
							<div className="badge badge-accent">human</div>
							<div className="badge badge-primary">human</div>
						</div>
						<div className='divider'></div>
						<h3>
							<p className='font-bold'>Description</p>
							Lorem ipsum dolor, sit amet consectetur
							adipisicing elit. Sequi quo mollitia illum
							blanditiis earum nisi, similique atque,
							fugiat quas unde perferendis, nihil
							consequatur minus. At quo delectus numquam
							vero perspiciatis.
						</h3>

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
			</div>
		</div>
	);
}
