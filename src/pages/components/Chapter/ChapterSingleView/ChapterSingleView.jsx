//utils
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
//services
import { getStory } from '../../../../services/storyService';
import { getChaptersOfStory, getSingleChapter } from '../../../../services/chaptersService';
import { ChapterList } from '../../Chapter/ChapterList/ChapterList';
import { Link } from 'react-router-dom';
//components


export const ChapterSingleView = () => {
    const params = useParams();
    const chapterId = params.chapterId;

    const [chapterState, setChapter] = useState({
        "id": "",
        "title": "",
        "content": "",
        "author_notes": "",
        "created_at": "",
        "updated_at": "",
        "story": ""
    })
    const [storyChaptersState, setStoryChapters] = useState([])

    useEffect(() => {
        const retrieveChapter = async (id) => {
            const response = await getSingleChapter(id);
            setChapter(response)
            console.log("chapterState", chapterState)
        }
        retrieveChapter(chapterId)

    }, []);

    return (
        <main>
            <div>
                <h2>{chapterState.title}</h2>
                <div>
                    <p><b>Authors note:</b>
                        {chapterState.author_notes}
                    </p>
                </div>
                <div>
                    {chapterState.content}
                </div>

            </div>
            <div>
                <div>Previous chapter</div>
                <Link to={"/stories/" + chapterState.story + "/"}><div>All chapters</div></Link>
                <div>Next chapter</div>
            </div>

        </main>
    )
}