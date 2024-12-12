import { Story } from "../Story"
import styles from "./StoryList.module.scss";

export const StoryList = ({ stories }) => {

    return (
        <div className={styles.list} >
            {stories.map((story, index) => {
                return (<Story key={index} story={story} />)
            })}

        </div>
    )
}