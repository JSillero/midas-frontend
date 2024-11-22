import { useState, useEffect } from 'react';
import { lastStories } from "../../services/storyService";
import { lastReviews } from '../../services/reviewsService.js';
import { lastChapters } from '../../services/chaptersService';
//components
import { StoryList } from "../components/Story/StoryList/StoryList";
import { StoryUpdateList } from '../components/Story/StoryUpdate/StoryUpdateList/StoryUpdateList';
import { LandingReviewList } from '../components/Review/LandingReviewList/LandingReviewList';

export const Landing = () => {
    const [storiesState, setStories] = useState([]);
    const [chaptersState, setChapters] = useState([]);
    const [reviewsState, setReviews] = useState([]);

    useEffect(() => {
        const retrieveStories = async () => {
            const response = await lastStories();
            setStories(response)
        }

        const retrieveChapters = async () => {
            const response = await lastChapters();
            setChapters(response)
        }

        const retrieveReviews = async () => {
            const response = await lastReviews();
            setReviews(response);
        }
        retrieveReviews()
        retrieveChapters()
        retrieveStories()
    }, []);

    return (
        <main>
            <div>
                <h3>Most Followed</h3>
                <StoryList stories={storiesState} />
            </div>

            <div>
                <h3>Latest Updates</h3>
                <StoryUpdateList chapters={chaptersState} stories={storiesState} />
            </div>

            {/* <div> TAGS TO BE IMPLEMENTED
                <h3>Common Tags</h3>
                <div>Tag list</div>
            </div> */}

            <div>
                <h3>Latest Reviews</h3>
                <LandingReviewList reviews={reviewsState} />

            </div>
        </main>
    )
}