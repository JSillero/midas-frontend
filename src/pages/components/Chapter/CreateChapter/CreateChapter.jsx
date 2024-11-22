//utils
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

import { postChapter } from '../../../../services/chaptersService';
//components

//styles

export const CreateChapter = ({ userState, setUser }) => {

    const params = useParams();
    const storyId = params.storyId;

    const [chapterFormData, setChapterFormData] = useState({
        title: '',
        content: '',
        author_notes: '',
        story: storyId,
    });

    const [error, setError] = useState(''); // Add error state
    const navigate = useNavigate();

    const handleCreateChapter = async () => {
        try {

            const newStory = await postChapter(chapterFormData)

            navigate(`/stories/${storyId}/`);
        } catch (error) {
            console.log(error);
            setError(error.message); // Set error message
        }
    };

    const handleChange = (evt) => {
        setChapterFormData({ ...chapterFormData, [evt.target.name]: evt.target.value });
    };

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        setError(''); // Clear previous errors before attempting sign-in
        handleCreateChapter();
        setChapterFormData({
            title: '',
            content: '',
            author_notes: '',
            story: storyId,
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
                                value={chapterFormData.title}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label  >Author notes
                            <input

                                name="author_notes"
                                value={chapterFormData.author_notes}
                                onChange={handleChange}

                            />
                        </label>
                    </div>
                    <div>
                        <label  >Content
                            <textarea

                                name="content"
                                value={chapterFormData.content}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>


                </div>

                {error && <p >{error}</p>} {/* Display error if exists */}

                <button type="submit">Add a chapter</button>

            </form>
        </main>
    );
};