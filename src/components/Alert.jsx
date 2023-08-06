import React, { useState , useEffect} from 'react';

export default function Alert ({ message }) {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    // Automatically hide the alert after 2 seconds
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    // Clear the timer when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return showAlert ? (
    <div className='alert alert-error absolute w-96'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='stroke-current shrink-0 h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
      <span>
        {message}
      </span>
    </div>
  ) : null;
};


