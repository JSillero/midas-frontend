//components
import { StoryUpdate } from "../StoryUpdate";

export const StoryUpdateList = ({ chapters, stories }) => {



    return (
        <div >
            {stories.map((story, index) => {
                return (<StoryUpdate key={index} story={story} chapter={chapters[index]} />)
            })}

        </div>
    )
}