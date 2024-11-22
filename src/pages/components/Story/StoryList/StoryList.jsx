import { Story } from "../Story"

export const StoryList = ({ stories }) => {

    return (
        <div >
            {stories.map((story, index) => {
                return (<Story key={index} story={story} />)
            })}

        </div>
    )
}