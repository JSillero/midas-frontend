import { Chapter } from "../Chapter"
import { Link } from "react-router-dom";
export const ChapterList = ({ chapters }) => {
    console.log("chapters", chapters)
    return (
        <div>

            {chapters.length == 0 ? (
                <p>There are no chapters, crerate one!</p>
            ) : (

                chapters.map((chapter, index) => {
                    return (<Chapter chapter={chapter} key={index}></Chapter>)
                })

            )}


        </div>
    )
}