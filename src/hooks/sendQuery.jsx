import axios from "axios"
import {toast} from 'react-toastify'
import authCheck from "./AuthCheck"

 export const sendQuery = async (data) => {
    
    const devUrl = import.meta.env.VITE_DEV_URL
    const prodUrl = import.meta.env.VITE_PROD_URL
    const environment = import.meta.env.NODE_ENV

    try {

        const authorized = authCheck()
        if (authorized === true) {
            const response = await axios.post(`${environment === 'production'? prodUrl : devUrl}/api/queries`, data)
            if (response) {
            toast('Query Successfully sent! We will contact you soon.', {
                hideProgressBar: true})
            }
        }
    
    } catch (error) {
        toast (`Error submitting form. Please try again later`, {
            hideProgressbar: true,
        })
    }
}

export default {sendQuery}
