
export const StoryUpdate = ({ story, chapter }) => {
    return (
        <div>
            <img src={story.cover} /><div>
                <p><b>{story.title}</b></p>
                {/* <p>{chapter.title}</p> */}
            </div>

        </div>
    )
}