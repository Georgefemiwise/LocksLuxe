// Home.js
import React from 'react';
import useAlert from '../hooks/Alert';

export default function Home() {
  const { handleShowAlert, Alert } = useAlert();

  return (
    <div>
      <Alert />
      <button onClick={() => handleShowAlert('Payment successful!', 'success')}>
        Pay
      </button>
    </div>
  );
}
