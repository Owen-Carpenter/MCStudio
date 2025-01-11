import '../styles/HomeReviews.css'
import ReviewCard from './ReviewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,  faAngleRight } from '@fortawesome/free-solid-svg-icons';

function HomeReviews(){
    return(
        <>
            <section className="reviews-container">
                <div className="reviews-title">
                    <h1>Reviews</h1>
                </div>
                <div className="review-card-container">
                    <button className="arrow-icon">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <ReviewCard 
                        name = 'Gwen Johns'
                        age = '2 weeks ago'
                        desc = 'I just love Makayla and always look forward to my visits with her. Her work is awesome !!'
                        stars = {5}
                        plat = 'google'
                    />
                    <ReviewCard 
                        name = 'Gwen Johns'
                        age = '2 weeks ago'
                        desc = 'I just love Makayla and always look forward to my visits with her. Her work is awesome !!'
                        stars = {4}
                        plat = 'google'
                    />
                    <ReviewCard 
                        name = 'Gwen Johns'
                        age = '2 weeks ago'
                        desc = 'I just love Makayla and always look forward to my visits with her. Her work is awesome !!'
                        stars = {3}
                        plat = 'google'
                    />
                    <button className="arrow-icon">
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
            </section>
        </>
    );
}

export default HomeReviews;