
export const LandingReview = ({ review }) => {

    return (
        <div>

            <p><b>{review.title}</b></p>
            <p> {review.content}</p>
        </div>
    )
}