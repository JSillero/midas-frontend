import axios from 'axios'
import { setToken } from '../utils/auth' //localstorage token functions

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}users`;

export const signUp = async (formData) => {
    try {
        const data = await axios.post(`${BASE_URL}/signup/`, formData)
        if (data.data.token) {
            setToken(data.data.token)
        }
        return data
    } catch (err) {
        // console.log(err.response.data);
        return err.response.data
    }
};

export const signIn = async (formData) => {
    try {
        // Sign up a user
        const data = await axios.post(`${BASE_URL}/login/`, formData)

        // Set the token to local storage
        if (data.data.token) {
            setToken(data.data.token)
        }
        return data
    } catch (error) {
        return error.response.data
    }
}

export const deleteUser = async (userId) => {
    try {
        // Sign up a user
        const { data } = await axios.post(`${BASE_URL}/delete/${userId}/`)

        // Set the token to local storage
        if (data.access) {
            setToken('')

        }

    } catch (error) {
        return error.response.data
    }
}

export const getUserData = async (userId) => {
    try {
        // Sign up a user
        const { data } = await axios.get(`${BASE_URL}/${userId}/`)

        return data.data.user

    } catch (error) {
        return error
    }
}
