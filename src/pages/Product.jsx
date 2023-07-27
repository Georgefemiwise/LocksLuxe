import React from 'react';
import NavBar from '../components/NavBar';
import { ProductList } from '../components/ProductList';
import { wigData } from '../wigData';
import { Outlet } from 'react-router-dom';
export default function Product() {
	return (
		<div className='relative font-serif text-sm flex flex-col items-center w-full'>
			<ProductList wigsData={wigData} />
		</div>
	);
}
