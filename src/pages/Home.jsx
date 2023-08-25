import React, { useState } from 'react';
import Alert from '../components/Alert';

export default function Home() {
	const [showAlert, setShowAlert] = useState(false);
	const [alertType, setAlertType] = useState(false);
	const [alertMessage, setAlertMessage] = useState(false);

	const handleShowAlert = (type, message) => {
		setShowAlert(true);
		setAlertType(type);
		setAlertMessage(message);
		localStorage.removeItem(localStorage.getItem(localStorage.removeItem('orderId')));
	};

	return (
		<div>
			<button
				onClick={() =>
					handleShowAlert('error', 'Item added successfully!')
				}>
				Add Item
			</button>

			<Alert
				trigger={showAlert}
				type={alertType}
				message={alertMessage}
			/>
		</div>
	);
}
