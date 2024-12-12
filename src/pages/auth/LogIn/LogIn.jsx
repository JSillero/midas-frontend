import { useState } from 'react';
import { signIn } from '../../../services/authService';
import styles from './LogIn.module.scss';
import { Link, useNavigate } from "react-router-dom";
import { getUser } from '../../../utils/auth';

export const LogIn = ({ userState, setUser }) => {
    const navigate = useNavigate();

    const [signInData, setSignInData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState(''); // Add error state

    const handleLogIn = async () => {
        try {
            const userData = await signIn(signInData);
            if (userData.error) {
                throw new Error(dataLogIn.error);
            }
            setUser(getUser())
            navigate("/");
        } catch (error) {
            console.log(error);
            setError("Username or password incorrect."); // Set error message
        }
    };

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        setError(''); // Clear previous errors before attempting sign-in
        handleLogIn();
        setSignInData({ username: '', password: '' });
    };

    const handleChange = (evt) => {
        setSignInData({ ...signInData, [evt.target.name]: evt.target.value });
    };

    return (
        <main>
            <form onSubmit={handleSubmitForm}>
                <h2>Log In</h2>
                <div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            value={signInData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={signInData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {error && <p className={styles.error}>{error}</p>} {/* Display error if exists */}

                <button type="submit">Log In</button>
                 
            </form>
        </main>
    )
}