import React from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Detail from './pages/Detail';

export default function App() {
	return (
		<div className='relative font-serif'>
			<header className='mb-20'>
				<NavBar />
      </header>
      <Detail/>
			{/* <div className='justify-center  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-5'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div> */}
		</div>
	);
}
