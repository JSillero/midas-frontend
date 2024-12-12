import { useState } from 'react';
import { signUp } from '../../../services/authService';
import styles from './SignIn.module.scss';
import { Link, useNavigate } from "react-router-dom";
import { getUser } from '../../../utils/auth';

export const SignUp = ({ userState, setUser }) => {
    const navigate = useNavigate();


    const [signInData, setSignInData] = useState({
        username: '',
        password: '',
        password_confirmation: '',
    });
    const [error, setError] = useState(''); // Add error state


    const handleSignUp = async () => {
        try {
            const newUser = await signUp(signInData);
            console.log("newUser", newUser)
            if (typeof newUser.non_field_errors !== 'undefined') {
                throw new Error(newUser.non_field_errors)
            }
            if (newUser.error) {
                throw new Error(newUser.error);
            }
            console.log("newUser.user", newUser)
            setUser(getUser());
            navigate("/");
        } catch (error) {
            console.log(error);
            setError(error.message); // Set error message
        }
    };

    const handleChange = (evt) => {
        setSignInData({ ...signInData, [evt.target.name]: evt.target.value });
    };

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        setError(''); // Clear previous errors before attempting sign-in
        handleSignUp();
        setSignInData({ username: '', password: '', password_confirmation: '' });
    };

    return (
        <main >
            <form onSubmit={handleSubmitForm}>
                <h2 className={styles.heading}>Sign Up</h2>
                <div className={styles.fields}>
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

                    <div>
                        <label htmlFor="passpassword_confirmationword">Confirm Password</label>
                        <input
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            value={signInData.password_confirmation}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {error && <p className={styles.error}>{error}</p>} {/* Display error if exists */}

                <button type="submit">Sign Up</button>

            </form>
        </main>
    );
};
