import React, { useState } from 'react';

export default function Checkout() {
	return (
		<>
			<h1>checkout</h1>
		</>
	);
}
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import Checkout from './Checkout';
// import useFetchProducts from '../hooks/useFetchProducts';

// export default function Cart() {
// 	const { products, loading, error } = useFetchProducts('carts')
// 	const [cartItems, setCartItems] = useState(products || []);

// 	console.log(products.items)

// 	const [amount, setAmount] = useState(0);

// 	function increase() {
// 		setAmount((prev) => prev + 1);
// 	}
// 	function decrease() {
// 		if (amount <= 1) {
// 			return; // Don't allow decreasing below the minimum value
// 		}
// 		setAmount((prev) => prev - 1);
// 	}
// 	let subtotal = 0;

// 	return (
// 		<>
// 			{/* <style>
//     @layer utilities {
//     input[type="number"]::-webkit-inner-spin-button,
//     input[type="number"]::-webkit-outer-spin-button {
//       -webkit-appearance: none;
//       margin: 0;
//     }
//   }
// </style> */}

// 			<>
// 				<div className='h-screen lg:w-[70rem]'>
// 					<h1 className='my-10 text-center text-4xl font-bold'>
// 						Cart Items
// 					</h1>
// 					<div className='mx-auto  justify-center px-6 md:flex md:space-x-6 xl:px-0 '>
// 						<div className=' h-[34rem] rounded-lg md:w-2/3 overflow-y-auto p-1'>
// 							{/* cart items card */}
// 							{products.length === 0 ? (
// 								<p className='mt-10 text-center'>
// 									Your cart is empty.
// 								</p>
// 							) : (
// 								products.map((item) => (
// 									<div
// 										key={item.Product_id}
// 										className='justify-between mb-6 rounded-lg bg-base-200 p-6 shadow-md sm:flex sm:justify-start '>
// 										<div className='hidden'>
// 											{
// 												(subtotal +=
// 													parseInt(
// 														item.price,
// 													))
// 											}
// 										</div>
// 										<img
// 											src='https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
// 											alt={item.name}
// 											className='w-full rounded-lg sm:w-40'
// 										/>
// 										<div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
// 											<div className='mt-5 sm:mt-0'>
// 												<h2 className='text-lg font-bold'>
// 													{
// 														item.name
// 													}
// 												</h2>
// 												<p className='mt-1 text-xs '>
// 													{item.description}
// 												</p>
// 											</div>
// 											{/* <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
// 												<div className='flex items-center border-gray-100'>
// 													<span
// 														onClick={
// 															decrease
// 														}
// 														className='cursor-pointer rounded-l bg-base-content py-1 px-3.5 duration-100 hover:bg-primary hover:text-white'>
// 														-
// 													</span>
// 													<input
// 														className='h-8 w-8 border bg-base-content text-center text-xs text-primary outline-none'
// 														type='number'
// 														value={
// 															amount
// 														}
// 														min='1'
// 													/>
// 													<span
// 														onClick={() => {
// 															increase(); // <-- Add parentheses here to call the function
// 														}}
// 														className='cursor-pointer rounded-r bg-base-content py-1 px-3 duration-100 hover:bg-primary hover:text-blue-50'>
// 														+
// 													</span>
// 												</div>
// 												<div className='flex items-center space-x-4'>
// 													<p className='text-sm'>
// 														Ghs{' '}
// 														{parseInt(
// 															item.price,
// 														)}
// 													</p>
// 													<svg
// 														onClick={() =>
// 															removeFromCart(
// 																item.Product_id,
// 															)
// 														}
// 														xmlns='http://www.w3.org/2000/svg'
// 														fill='none'
// 														viewBox='0 0 24 24'
// 														stroke-width='3'
// 														stroke='currentColor'
// 														className='h-5 w-5 cursor-pointer duration-150 text-neutral-focus font-black hover:text-red-500'>
// 														<path
// 															stroke-linecap='round'
// 															stroke-linejoin='round'
// 															d='M6 18L18 6M6 6l12 12'
// 														/>
// 													</svg>
// 												</div>
// 											</div> */}
// 										</div>
// 									</div>
// 								))
// 							)}
// 						</div>
// 						{/* <!-- Sub total --> */}
// 						{/* <div className='mt-6 h-full rounded-lg border bg-neutral-content p-6 shadow-md md:mt-0 md:w-1/3'>
// 							<div className='mb-2 flex justify-between'>
// 								<p className='text-base-200'>
// 									Subtotal
// 								</p>
// 								<p className='text-base-200'>
// 									Ghs {subtotal}
// 								</p>
// 							</div>
// 							<div className='flex justify-between'>
// 								<p className='text-base-200'>
// 									Shipping
// 								</p>
// 								<p className='text-base-200'>$4.99</p>
// 							</div>
// 							<hr className='my-4' />
// 							<div className='flex justify-between'>
// 								<p className='text-lg font-bold text-base-100'>
// 									Total
// 								</p>
// 								<div className=''>
// 									<p className='mb-1 text-lg font-bold text-base-100'>
// 										$134.98 USD
// 									</p>
// 								</div>
// 							</div>
// 							<button className='btn btn-primary mt-6 w-full  '>
// 								Check out
// 							</button>
// 						</div> */}
// 					</div>
// 				</div>
// 			</>
// 		</>
// 	);
// }
// //  const { cart, loading, error } = useFetchCart({ apiUrl: '/api/cart/' });

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error.message}</div>;
// //   }

// //   return (
// //     <div>
// //       <h2>Cart</h2>
// //       {cart && cart.items && cart.items.length > 0 ? (
// //         <ul>
// //           {cart.items.map((item) => (
// //             <li key={item.product.id}>
// //               {item.product.name} - Quantity: {item.quantity}
// //             </li>
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>Cart is empty</p>
// //       )}
