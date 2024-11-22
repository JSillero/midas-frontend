import { Link } from "react-router-dom"

export const Story = ({ story }) => {

    return (
        <div>
            <img src={story.cover} />
            <p><Link to={`/stories/${story.id}/`}><b>{story.title}</b></Link></p>
            {/* Tags not implemented  */}
        </div>
    )
}