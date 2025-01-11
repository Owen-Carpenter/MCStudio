import '../styles/ReviewsCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ReviewCard({ name, age, desc, stars, plat}: { name: string; age: string; desc: string; stars: number; plat: string}){
    
    const totalStars = 5;
    const filledStars = Array.from({ length: stars }, (_, i) => (
        <span key={`filled-${i}`} className="star filled">★</span>
    ));
    const unfilledStars = Array.from({ length: totalStars - stars }, (_, i) => (
        <span key={`unfilled-${i}`} className="star unfilled">☆</span>
    ));
    
    return(
        <>
            <div className="review-card">
                <div className="title-container">
                    <div className="title-text">
                        <h1>{name}</h1>
                        <h4>{age}</h4>
                    </div>
                    <div className="icon">
                        <img src="/public/assets/location-pin.png" alt="" />
                    </div>
                </div>
                <div className="content-container">
                    <div className="stars">
                        {filledStars}
                        {unfilledStars}
                    </div>
                    {desc}
                </div>
            </div>
        </>
    );
} 

export default ReviewCard;