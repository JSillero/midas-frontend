import { Link } from "react-router-dom"

export const Chapter = ({ chapter }) => {
    return (
        <div>
            <Link to={'/chapter/' + chapter.id + '/'}  ><p>{chapter.title}  <span>{chapter.created_at.substring(0, 10)}</span></p></Link>
        </div>


    )
}