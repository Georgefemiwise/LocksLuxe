import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useFetchProducts from '../hooks/useFetchProducts';
import { Link } from 'react-router-dom';
import useDeleteCartItemHook from '../hooks/useDeleteCart';

const CartItems = () => {
	const data = useFetchProducts();
	const cartItems = data.products;
	const error = data.error;
	const loading = data.loading;

	const { deleteCartItem, deleting, deleteError } = useDeleteCartItemHook();
	const handleDelete = async (id) => {
		await deleteCartItem(id);
		data
		// Handle the deleted item in your cart state
		console.log('Deleted item ID:', id);
	};

	const [amount, setAmount] = useState(1);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	let subtotal = 0;
	return (
		<>
			<div className='h-screen lg:w-[70rem] '>
				

				<div className='mx-auto  justify-center px-6 md:flex md:space-x-6 xl:px-0 '>
					<div className=' h-[34rem] rounded-lg md:w-2/3 overflow-y-auto p-1'>
						{cartItems.map((item) => (
							<>
								<div
									key={item.id}
									className='justify-between mb-6 rounded-lg bg-base-200 p-6 shadow-md sm:flex sm:justify-start '>
									<div className='hidden'>
										{
											(subtotal +=
												item.product_details
													.price)
										}
									</div>
									<img
										src={`../../backend/${item.product_details.image}`}
										alt={item.name}
										className='w-full rounded-lg sm:w-40'
									/>
									{console.log(item.product_details.image)}
									<div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
										<div className='mt-5 sm:mt-0'>
											<h2 className='text-lg font-bold capitalize'>
												{
													item
														.product_details
														.name
												}
											</h2>
											<p className='mt-1 text-xs '>
												{
													item
														.product_details
														.description
												}
											</p>
										</div>
										<div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
											<div className='flex items-center border-gray-100'>
												{/* <span
										onClick={() => {}}
										className='cursor-pointer rounded-l bg-base-content py-1 px-3.5 duration-100 hover:bg-primary hover:text-white'>
										-
									</span> */}
												<input
													className='h-8 p-2 w-16 border bg-base text-center text-xs text-white outline-none '
													type='number'
													min='1'
													value={
														item.quantity
													}
												/>
												{/* <span
										onClick={() => {}}
										className='cursor-pointer rounded-r bg-base-content py-1 px-3 duration-100 hover:bg-primary hover:text-blue-50'>
										+ 
									</span>*/}
											</div>
											<div className='flex items-center space-x-3 '>
												<p className='text-sm'>
													{'Ghs ' +
														item
															.product_details
															.price}
												</p>
												<svg
													onClick={() =>
														handleDelete(
															item.id,
														)
													}
													xmlns='http:www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='3'
													stroke='currentColor'
													className='h-5 w-5 cursor-pointer duration-150 text-neutral-focus font-black hover:text-red-500'>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M6 18L18 6M6 6l12 12'
													/>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</>
						))}
					</div>
					{/* <!-- Sub total --> */}

					<div className='mt-6 h-full rounded-lg border bg-neutral-content p-6 shadow-md md:mt-0 md:w-1/3'>
						<div className='mb-2 flex justify-between'>
							<p className='text-base-200'>Subtotal</p>
							<p className='text-base-200'>
								Ghs {subtotal}
							</p>
						</div>
						<div className='flex justify-between'>
							<p className='text-base-200'>Shipping</p>
							<p className='text-base-200'>$4.99</p>
						</div>
						<hr className='my-4' />
						<div className='flex justify-between'>
							<p className='text-lg font-bold text-base-100'>
								Total
							</p>
							<div className=''>
								<p className='mb-1 text-lg font-bold text-base-100'>
									Ghs {subtotal}
								</p>
							</div>
						</div>
						<Link
							to={'/cart/checkout'}
							className='btn btn-primary mt-6 w-full  '>
							Check out
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItems;
