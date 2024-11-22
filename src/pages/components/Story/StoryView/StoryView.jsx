//utils
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
//services
import { getStory } from '../../../../services/storyService';
import { getChaptersOfStory } from '../../../../services/chaptersService';
import { ChapterList } from '../../Chapter/ChapterList/ChapterList';
import { Link } from 'react-router-dom';

import { deleteStory } from '../../../../services/storyService';
//components


export const StoryView = ({ userState }) => {
    const navigate = useNavigate();
    const params = useParams();
    const storyId = params.storyId;
    console.log(storyId);

    const [storyState, setStory] = useState({
        "id": "",
        "title": "",
        "cover": "",
        "description": "",
        "created_at": "",
        "updated_at": "",
        "author": '',
        "tags": []
    })
    const [storyChaptersState, setStoryChapters] = useState([])

    useEffect(() => {
        const retrieveStory = async (id) => {
            const response = await getStory(id);
            setStory(response)
            console.log("storyState", storyState)

        }
        const retrieveChapters = async (id) => {
            const response = await getChaptersOfStory(id);
            setStoryChapters(response)

        }
        retrieveChapters(storyId)
        retrieveStory(storyId)

    }, []);

    const handleRemove = () => {
        const removeStory = async () => {
            const response = await deleteStory(storyState.id);
            navigate("/myStories")
        }
        removeStory()
    }


    return (
        <main>
            <div>
                <h1>{storyState.title}</h1>
                <img src={storyState.cover}></img>
                <p><b>Summary</b></p>
                <p>{storyState.description}</p>
            </div>
            {storyState.author == userState ? (
                <div>
                    <div>
                        <Link to={`stories/${storyState.id}/edit/`}><p>Edit story</p></Link>
                        <p onClick={handleRemove}>Delete story</p>
                    </div>
                    <div>
                        <p> <Link to={`/chapter/new/${storyState.id}/`}> Create chapter </Link></p>
                    </div>
                </div>

            ) : (
                <></>
            )}



            <ChapterList chapters={storyChaptersState}></ChapterList>
        </main>
    )
}