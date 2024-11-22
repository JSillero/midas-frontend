import { useState, useEffect } from "react"

//services
import { followedStories } from "../../../../services/storyService"

//components
import { Story } from "../Story"

export const StoriesFollowed = ({ userState }) => {
    const [storiesFollowedState, setStoriesFollowed] = useState([])
    console.log("userState,", userState)
    useEffect(() => {
        const retrieveReviews = async (id) => {
            const response = await followedStories(id);
            setStoriesFollowed(response)
        }
        retrieveReviews(userState)
    }, []);


    return (
        <main>
            <h3>Followed:</h3>
            {storiesFollowedState.length == 0 ? <p>No stories found</p> : ""}
            <div>

                {
                    storiesFollowedState.map((story, index) => {
                        return (<Story key={index} story={story} />)
                    })
                }

            </div>
        </main>
    )
}