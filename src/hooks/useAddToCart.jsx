

import { useState } from 'react';
import axios from 'axios';

const useAddToCart = () => {
  const [addingToCart, setAddingToCart] = useState(false);
  const [addingError, setAddingError] = useState(null);

  const addCartItem = async (productId) => {
    setAddingToCart(true);
    setAddingError(null);

    try {
      const response = await axios.post(
			`http://127.0.0.1:8000/cartitems/add/`,
			{
				product: productId,
				quantity: 1, // You can adjust the quantity as needed
			},
		);

      // Handle success, e.g., show a success message
    } catch (error) {
      setAddingError(error.message);
    } finally {
      setAddingToCart(false);
    }
  };

  return { addCartItem, addingToCart, addingError };
};

export default useAddToCart;
