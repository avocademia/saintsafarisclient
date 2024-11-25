import axios from "axios";
import authCheck from '../hooks/AuthCheck';
import { toast } from "react-toastify";

const accommodationBooking = async (data) => {
    const devUrl = import.meta.env.VITE_DEV_URL; // Development base URL
    const prodUrl = import.meta.env.VITE_PROD_URL; // Production base URL
    const environment = import.meta.env.NODE_ENV; // Current environment

    console.log('accommodation booking:', data);

    try {
        const authorized = await authCheck(); // Check if the user is authorized
        if (authorized === true) {
            // Send a POST request to the appropriate endpoint
            const response = await axios.post(`${environment === 'production' ? prodUrl : devUrl}/api/accommodation-booking`, data);
            return response.data; // Return the response data
        } else {
            toast.error('Authorization failed. Please log in again.');
            return null;
        }
    } catch (error) {
        toast.error('An error occurred while processing your booking. Please try again.');
        throw error; // Re-throw the error for further handling
    }
};

export default accommodationBooking;