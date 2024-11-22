import { Story } from "../Story"

export const StoryResultList = ({ storiesResultState }) => {
    console.log("storiesResultState", storiesResultState)
    return (
        <main>
            <h3>Stories found:</h3>
            {storiesResultState.length == 0 ? <p>No stories found</p> :  ""}
            {storiesResultState.map((story, index) => {
                return (<Story story={story} key={index} />)
            })}

        </main>
    )
}