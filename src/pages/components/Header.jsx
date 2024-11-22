import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser, removeToken } from "../../utils/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from "./Header.module.scss";

import { searchStory } from "../../services/storyService";

export const Header = ({ setStoriesResult, userState, setUser }) => {
    const [menuOpenState, setMenuOpen] = useState()
    const [searchBarState, setSearchBar] = useState({
        title: '',
        description: '',
        author: '',
    });
    const navigate = useNavigate();

    const handleSignOut = () => {
        console.log("entra en signout")
        removeToken();
        setUser(0);
        navigate('/');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpenState);
    };

    const handleSearch = async (searchBarState) => {
        try {
            const response = await searchStory(searchBarState);
            return response;
        } catch (error) {

        }
    }

    const handleChange = (evt) => {
        setSearchBar({ ...searchBarState, [evt.target.name]: evt.target.value });
    };

    const handleSubmitForm = async (evt) => {
        evt.preventDefault();
        const storiesResult = await handleSearch(searchBarState);
        setStoriesResult(storiesResult);
        navigate("/stories/search")
    };

    return (
        <header className={styles.header}>

            <div className={styles.titleElement} > <h1><Link to={"/"}>Midas Hands</Link></h1>
                <FontAwesomeIcon className={styles.hamburger} icon={faBars} onClick={toggleMenu} /></div>

            <div className={styles.searchBar}>
                <form onSubmit={handleSubmitForm}><input
                    type="text"
                    name="title"
                    value={searchBarState.title}
                    onChange={handleChange} />  <input type="submit" value="Search" /> <Link to={"/advancedsearch"}><FontAwesomeIcon icon={faPlus} /></Link></form>
            </div>

            <ul className={`${styles.navMenu} ${menuOpenState ? styles.open : ''}`} onClick={() => setMenuOpen(false)}>
                {userState != 0 ? (
                    <>
                        <Link to={"/follows"} ><li>Follows</li></Link>
                        <Link to={"/profile"}><li>Profile</li></Link>
                        <Link to={"/myStories"}><li>Stories</li></Link>
                        <li onClick={() => { handleSignOut() }}>Log Out</li>
                    </>
                ) : (
                    <>
                        <Link to={"/user/login"}><li>Log In</li></Link>
                        <Link to={"/user/signup"}><li>Sign Up</li></Link>
                    </>
                )}
            </ul>

        </header>
    );
};