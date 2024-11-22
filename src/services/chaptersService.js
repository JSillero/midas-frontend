import axios from 'axios'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}chapters`;

export const lastChapters = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/latest/`)
        return data.chapters;
    } catch (error) {
        return error.response.data
    }
}

export const postChapter = async (formData) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/new/`, formData)
        return data.chapters;
    } catch (error) {
        return error.response.data
    }
}

export const getChaptersOfStory = async (storyId) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/story/${storyId}/`)
        return data.chapters;
    } catch (error) {
        return error.response.data
    }
}

export const getSingleChapter = async (chapterId) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${chapterId}/`)
        return data.chapter;
    } catch (error) {
        return error.response.data
    }
}




