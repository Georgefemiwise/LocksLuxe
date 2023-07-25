import React from 'react';
import NavBar from '../components/NavBar';
import { ProductList } from '../components/ProductList';
import { wigData } from '../wigData';

export default function Product() {
	return (
		<div className='relative font-serif text-sm flex flex-col items-center w-full'>
			<header className='mb-20 w-full'>
				<NavBar />
			</header>

			<ProductList wigsData={wigData} />
		</div>
	);
}
