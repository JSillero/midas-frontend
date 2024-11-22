import axios from 'axios'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}reviews`;


export const lastReviews = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/latest/`)
        return data.reviews;
    } catch (error) {
        return error.response.data
    }
}