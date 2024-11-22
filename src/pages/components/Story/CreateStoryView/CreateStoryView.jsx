//utils
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { postStory } from '../../../../services/storyService';
//components

//styles

export const CreateStoryView = ({ userState, setUser }) => {

    const [storyFormData, setStoryFormData] = useState({
        title: '',
        cover: '',
        description: '',
        author: userState,
    });

    const [error, setError] = useState(''); // Add error state
    const navigate = useNavigate();

    const handleCreateStory = async () => {
        try {

            const newStory = await postStory(storyFormData)

            navigate("/myStories");
        } catch (error) {
            console.log(error);
            setError(error.message); // Set error message
        }
    };

    const handleChange = (evt) => {
        setStoryFormData({ ...storyFormData, [evt.target.name]: evt.target.value });
    };

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        setError(''); // Clear previous errors before attempting sign-in
        handleCreateStory();
        setStoryFormData({
            title: '',
            cover: '',
            description: '',
            author: userState,
        });
    };

    return (
        <main >
            <h3 >Create story</h3>
            <form onSubmit={handleSubmitForm}>

                <div  >
                    <div>
                        <label >Title
                            <input
                                name="title"
                                value={storyFormData.title}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label  >Cover url
                            <input

                                name="cover"
                                value={storyFormData.cover}
                                onChange={handleChange}

                            />
                        </label>
                    </div>
                    <div>
                        <label  >Description
                            <textarea

                                name="description"
                                value={storyFormData.description}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>


                </div>

                {error && <p >{error}</p>} {/* Display error if exists */}

                <button type="submit">Create Story</button>

            </form>
        </main>
    );
};