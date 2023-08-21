import { useState } from 'react';
import axios from 'axios';

const useDeleteCartItemHook = () => {
	const [deleting, setDeleting] = useState(false);
	const [deleteError, setDeleteError] = useState(null);

	const deleteCartItem = async (cartItemId) => {
		setDeleting(true);
		try {
			await axios.delete(`http://127.0.0.1:8000/cartitems/${cartItemId}/`);
			setDeleting(false);
			
			return cartItemId;
		} catch (error) {
			setDeleting(false);
			setDeleteError(error);
		}
	};

	return { deleteCartItem, deleting, deleteError };
};

export default useDeleteCartItemHook;
