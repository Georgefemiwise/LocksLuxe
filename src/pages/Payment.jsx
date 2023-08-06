// import React, { useState } from 'react';
// import Alert from '../components/Alert';

// const PaymentForm = () => {
// 	const [email, setEmail] = useState('');
// 	const [amount, setAmount] = useState('');
// 	const [firstName, setFirstName] = useState('');
// 	const [lastName, setLastName] = useState('');
// 	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
// 	const [showErrorAlert, setShowErrorAlert] = useState(false);

// 	const payWithPaystack = (e) => {
// 		e.preventDefault();

// 		// Check if any of the required fields is empty
// 		if (!email || !amount || !firstName || !lastName) {
// 			alert('Please fill in all the required fields.');
// 			return;
// 		}

// 		let handler = PaystackPop.setup({
// 			key: 'pk_test_e9a874e1f8db72ffe0451c6ade70033e60890317', // Replace with your public key
// 			email: email,
// 			amount: amount * 100,
// 			currency: 'GHS', // Use GHS for Ghana Cedis or USD for US Dollars
// 			ref: '' + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference
// 			onClose: function () {
// 				alert('Transaction was not completed.');
// 			},

// 			callback: function (response) {
// 				if (response.status === 'success') {
// 					setShowSuccessAlert(true);
// 					setShowErrorAlert(false);
// 				} else {
// 					setShowSuccessAlert(false);
// 					setShowErrorAlert(true);
// 				}
// 			},
// 		});

// 		handler.openIframe();
// 	};

// 	return (
// 		<form id='paymentForm'>
			
// 			{showSuccessAlert && (
// 				<Alert
// 					message={`Payment complete! Reference:`}
// 				/>
// 			)}
// 			{showErrorAlert && <Alert message={'Something went wrong.'} />}

// 			<div className='card rounded bg-base-300 shadow-sm'>
// 				<div className='card-body'>
// 					<div className='form-control w-full flex '>
// 						<label htmlFor='email'>Email Address </label>
// 						<input
// 							type='email'
// 							id='email-address'
// 							value={email}
// 							onChange={(e) => setEmail(e.target.value)}
// 							required
// 							className='input input-bordered w-full'
// 						/>
// 					</div>
// 					<div className='form-group'>
// 						<label htmlFor='amount'>Amount</label>
// 						<input
// 							type='number'
// 							id='amount'
// 							value={amount}
// 							onChange={(e) => setAmount(e.target.value)}
// 							required
// 							className='input input-bordered w-full'
// 						/>
// 					</div>
// 					<div className='form-group'>
// 						<label htmlFor='first-name'>First Name</label>
// 						<input
// 							type='text'
// 							id='first-name'
// 							value={firstName}
// 							onChange={(e) =>
// 								setFirstName(e.target.value)
// 							}
// 							className='input input-bordered w-full'
// 						/>
// 					</div>
// 					<div className='form-group'>
// 						<label htmlFor='last-name'>Last Name</label>
// 						<input
// 							type='text'
// 							id='last-name'
// 							value={lastName}
// 							onChange={(e) => setLastName(e.target.value)}
// 							className='input input-bordered w-full'
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 			<div className='form-control card '>
// 				<button
// 					type='submit'
// 					className='btn btn-primary rounded-none'
// 					onClick={payWithPaystack}>
// 					Pay
// 				</button>
// 			</div>
// 		</form>
// 	);
// };





// ...............................
import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the required fields is empty
    if (!email || !amount || !firstName || !lastName) {
      alert('Please fill in all the required fields.');
      return;
    }

    // Prepare the data to be sent in the request body
    const data = {
      email,
      amount: parseFloat(amount), // Convert amount to a number
      first_name: firstName,
      last_name: lastName,
	  };

	  let handler = PaystackPop.setup({
			key: 'pk_test_e9a874e1f8db72ffe0451c6ade70033e60890317', // Replace with your public key
			email: data.email,
			amount: data.amount * 100,
			currency: 'GHS', // Use GHS for Ghana Cedis or USD for US Dollars
			ref: '' + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference
			onClose: function () {
				alert('Transaction was not completed.');
			},

		 callback: function (response) {

    // Prepare the data to be sent in the request body
    const data = {
      email,
      amount: parseFloat(amount), // Convert amount to a number
      first_name: firstName,
      last_name: lastName,
    };

    // Make the API call to your Django endpoint using axios
    axios.post('/api/make_payment/', data)
      .then((apiResponse) => {
        // Handle the success response from your Django API
        alert(apiResponse.data.message);
		  apiResponse.status === 'success' ?
			  setShowSuccessAlert(true):setShowErrorAlert(true)
  }
      })
      .catch((error) => {
        // Handle the error response from your Django API
        alert('Payment failed. Please try again later.');
      });
},

	
	  

    
  };

  return (
    <form id='paymentForm' onSubmit={handleSubmit}>
      {/* Your form fields */}
      {/* ... */}
      <button type='submit'>Pay</button>
    </form>
  );
};




export default PaymentForm;
