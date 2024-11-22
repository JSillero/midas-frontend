import { useState, useEffect } from "react"

//services
import { followedStories, myStories } from "../../../../services/storyService"

//components
import { Story } from "../Story"
import { Link } from "react-router-dom"

export const MyStoriesList = ({ userState }) => {
    const [myStoriesState, setMyStories] = useState([])
    useEffect(() => {
        const retrieveReviews = async (id) => {
            const response = await myStories(id);
            setMyStories(response)
        }
        retrieveReviews(userState)
        console.log(myStoriesState);
    }, []);

    return (
        <main>
            <h3>My stories:</h3>
            <Link to={"/stories/new"}> <p>Crate a story</p></Link>
            {myStoriesState.length == 0 ? <p>No stories found , create one!</p> :
                <div>
                    {
                        myStoriesState.map((story, index) => {
                            return (<Story key={index} story={story} />)
                        })
                    }
                </div>}

        </main>
    )
}