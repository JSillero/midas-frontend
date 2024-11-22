import axios from 'axios'
import { getUser } from '../utils/auth';

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}stories`;

export const lastStories = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/latest/`)

        return data.stories;
    } catch (error) {
        return error.response.data
    }
}

export const getStory = async (storyId) => {
    try {
        const story = await axios.get(`${BASE_URL}/${storyId}/`)
        console.log(story);
        return story.data.story;
    } catch (error) {
        return error.response.data
    }
}

export const postStory = async (storyData) => {
    try {
        const story = await axios.post(`${BASE_URL}/new/`, storyData)
        console.log(story);
        return story.data.story;
    } catch (error) {
        return error.response.data
    }
}

export const editStory = async (storyId, storyData) => {
    try {
        const story = await axios.put(`${BASE_URL}/${storyId}/`, storyData)
        console.log(story);
        return story.data.story;
    } catch (error) {
        return error.response.data
    }
}

export const deleteStory = async (storyId) => {
    try {
        const story = await axios.delete(`${BASE_URL}/${storyId}/`)
        console.log(story);
        return story.data.story;
    } catch (error) {
        return error.response.data
    }
}

export const searchStory = async (searchQuery) => {
    try {
        const story = await axios.post(`${BASE_URL}/search/`, searchQuery)
        console.log("story", story);
        return story.data.stories;
    } catch (error) {
        return error.response.data
    }
}

export const followedStories = async (idUser) => {
    try {

        console.log(JSON.stringify(getUser()))
        const stories = await axios.get(`${BASE_URL}/followed/${idUser}/`)
        return stories.data.stories;
    } catch (error) {
        return error
    }
}

export const myStories = async (idUser) => {
    try {

        console.log(JSON.stringify(getUser()))
        const stories = await axios.get(`${BASE_URL}/author/${idUser}/`)
        return stories.data.stories;
    } catch (error) {
        return error
    }
}



