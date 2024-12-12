import { useState, useEffect } from 'react';

import { searchStory } from "../../services/storyService";
import { useNavigate } from 'react-router-dom';

import styles from "./AdvancedSearchPage.module.scss";
export const AdvancedSearchPage = ({ storiesResultState, setStoriesResult }) => {
    const [searchBarState, setSearchBar] = useState({
        title: '',
        description: '',
        author: '',
    });
    const navigate = useNavigate();


    const handleChange = (evt) => {
        setSearchBar({ ...searchBarState, [evt.target.name]: evt.target.value });
    };

    const handleSearch = async (searchBarState) => {
        try {
            const response = await searchStory(searchBarState);
            return response;
        } catch (error) {

        }
    }

    const handleSubmitForm = async (evt) => {
        evt.preventDefault();
        const storiesResult = await handleSearch(searchBarState);
        setStoriesResult(storiesResult);
        navigate("/stories/search")
    };

    return (
        <main>
            <h2>Advanced search</h2>
            <form onSubmit={handleSubmitForm} className={styles.searchForm}>
                <label>
                    Title: <input type="text"
                        name="title"
                        value={searchBarState.title}
                        onChange={handleChange} />
                </label>
                <label>
                    Author: <input type="text"
                        name="author"
                        value={searchBarState.author}
                        onChange={handleChange} />
                </label>
                <label>
                    Description: <input type="text"
                        name="description"
                        value={searchBarState.description}
                        onChange={handleChange} />
                </label>
                <input type="submit" value="Search" />
            </form>
        </main>
    )
}