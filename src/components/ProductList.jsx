import React, { useState } from 'react';
import Card from './Card';

export function ProductList({ wigsData }) {
	// State to hold the search term entered in the input field
	const [searchTerm, setSearchTerm] = useState('');

	// Event handler for updating the search term state
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	// Filter the wigs based on the search term
	const filteredWigs = wigsData.filter((wig) =>
		wig.wig_name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<>
			{/* Input field for searching wigs */}
			<div className='form-control w-full flex items-center justify-center'>
				<input
					type='text'
					value={searchTerm}
					onChange={handleSearch}
					placeholder='Search'
					className='input max-w-[30rem] input-bordered w-full'
				/>
			</div>

			{/* Display the filtered wigs in a grid layout */}
			<div className='justify-center grid px-10 lg:grid-cols-4 max-w-screen-xl md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-5'>
				{filteredWigs.length === 0 ? (
					// If no wigs match the search term, display a message
					<div className='w-full left-0 flex justify-center absolute'>
						<p className='font-semibold text-2xl capitalize'>
							item not found.
						</p>
					</div>
				) : (
					// Otherwise, map through the filtered wigs and render the Card component
					filteredWigs.map((wig) => (
						<Card
							key={wig.wig_id}
							id={wig.wig_id}
							name={wig.wig_name}
							price={wig.price}
							description={wig.description}
							rating={wig.ratings}
							image={wig.image_url}
							isAvailable={wig.availability}
						/>
					))
				)}
			</div>
		</>
	);
}
