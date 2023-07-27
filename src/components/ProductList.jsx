import React, { useState } from 'react';
import Card from './Card';

export function ProductList({ wigsData }) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredWigs = wigsData.filter((wig) =>
		wig.wig_name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<>
			<div className='form-control w-full flex items-center justify-center'>
				<input
					type='text'
					value={searchTerm}
					onChange={handleSearch}
					placeholder='Search'
					className='input max-w-[30rem] input-bordered w-full'
				/>
			</div>
			<div className='justify-center grid lg:grid-cols-4 max-w-screen-2xl selection: md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-5'>
				{filteredWigs.length === 0 ? (
					<div className='w-full left-0 flex justify-center absolute '>
						<p className='font-semibold text-2xl capitalize'>
							🥶Sorry "{searchTerm}" not found.
						</p>
					</div>
				) : (
					filteredWigs.map((wig) => (
						<Card
							key={wig.wig_id}
							id={wig.wig_id}
							name={wig.wig_name}
							price={wig.price}
							image={wig.image_url}
							description={
								wig.description.slice(0, 50) + '...'
							}
							isAvailable={wig.availability}
						/>
					))
				)}
			</div>
		</>
	);
}
