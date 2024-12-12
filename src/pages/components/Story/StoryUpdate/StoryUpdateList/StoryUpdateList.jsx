//components
import { StoryUpdate } from "../StoryUpdate";
import styles from "./StoryUpdateList.module.scss";

export const StoryUpdateList = ({ chapters, stories }) => {
    return (
        <div className="list" >
            {stories.map((story, index) => {
                return (<StoryUpdate key={index} story={story} chapter={chapters[index]} />)
            })}

        </div>
    )
}