//utils
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useNavigate } from "react-router-dom";
import { postStory } from '../../../../services/storyService';
import { getStory } from '../../../../services/storyService';
import { editStory } from '../../../../services/storyService';
//components

//styles

export const StoryEditView = ({ userState, setUser }) => {
    const navigate = useNavigate();
    const params = useParams();
    const storyId = params.storyId;

    const [storyFormData, setStoryFormData] = useState({
        title: '',
        cover: '',
        description: '',
        author: userState,
    });

    useEffect(() => {
        const edit = async (id) => {
            const response = await getStory(id);
            setStoryFormData({
                title: response.title,
                cover: response.cover,
                description: response.description,
                author: userState,
            });
        }
        edit(storyId)

    }, []);

    const [error, setError] = useState(''); // Add error state
 

    const handleCreateStory = async () => {
        try {

            const editedStory = await editStory(storyId, storyFormData)

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
        navigate("/myStories");
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

                <button type="submit">Edit Story</button>

            </form>
        </main>
    );
};