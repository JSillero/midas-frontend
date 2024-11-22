//utils
//services
//components

import { LandingReview } from "./LandingReview/LandingReview"

export const LandingReviewList = ({ reviews }) => {
     return (
        <div >
            {reviews.map((review,index) => {
                return(<LandingReview review={review} key={index} />)
            })}
        </div>
    )
}