import React, { useRef, useState, useEffect } from 'react';
import '../styles/HomeReviews.css';
import ReviewCard from './ReviewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function HomeReviews() {
  const reviewContainerRef = useRef<HTMLDivElement | null>(null);
  const [cardCounter, setCardCounter] = useState(0);
  const [numCardsToDisplay, setNumCardsToDisplay] = useState(3);

  const spans = Array.from({ length: 15 }, (_, i) => (
    <span key={i} style={{ "--i": Math.floor(Math.random() * 15) + 1 } as React.CSSProperties}></span>
  ));

  //update num cards on screen
  const updateScreenSize = () => {
    const screenWidth = window.innerWidth;
    setNumCardsToDisplay(screenWidth < 992 ? 1 : 3);
  };

  //Show next slide
  const nextCard = () => {
    if (!reviewContainerRef.current) return;
    const numCards = reviewContainerRef.current.children.length;
    setCardCounter((prev) => (prev + numCardsToDisplay) % numCards);
  };

  //Show previous slide
  const previousCard = () => {
    if (!reviewContainerRef.current) return;
    const numCards = reviewContainerRef.current.children.length;
    setCardCounter((prev) => (prev - numCardsToDisplay + numCards) % numCards);
  };

  useEffect(() => {
    //Update screen size on load and resize
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    //Update visible cards when cardCounter or numCardsToDisplay changes
    if (!reviewContainerRef.current) return;
    const reviewCards = Array.from(reviewContainerRef.current.children) as HTMLDivElement[];
    reviewCards.forEach((card, index) => {
      card.style.display =
        index >= cardCounter && index < cardCounter + numCardsToDisplay ? 'block' : 'none';
    });
  }, [cardCounter, numCardsToDisplay]);

  return (
    <section className="reviews-container">
      <div className="bubbles">
        {spans}
        {spans}
        {spans}
      </div>
      <div className="reviews-title">
        <h1>Reviews</h1>
      </div>
      <div className="review-card-container">
        <button className="arrow-icon" onClick={previousCard}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <div className="review-card-wrapper" ref={reviewContainerRef}>
          <ReviewCard
            name="Gwen Johns"
            age="2 weeks ago"
            desc="I just love Makayla and always look forward to my visits with her. Her work is awesome!!"
            stars={5}
          />
          <ReviewCard
            name="Jewell Sanders"
            age="3 weeks ago"
            desc="Makayla is great! She knows what she's doing and makes you feel very comfortable. 10/10 would recommend!"
            stars={5}
          />
          <ReviewCard
            name="Toska"
            age="1 month ago"
            desc="She is the best of the best. Always happy with my lashes and all services. Highly recommend her!"
            stars={5}
          />
          <ReviewCard
            name="Amanda R."
            age="1 month ago"
            desc="Makayla's attention to detail is unmatched. My lashes look flawless every time. Thank you for your amazing work!"
            stars={5}
          />
          <ReviewCard
            name="Taylor H."
            age="1 month ago"
            desc="I've been to many studios, but nothing compares to Makayla's professionalism and talent. She truly knows how to enhance your natural beauty!"
            stars={4}
          />
          <ReviewCard
            name="Brianna S."
            age="2 months ago"
            desc="Makayla is absolutely phenomenal! Her studio is clean, relaxing, and her work speaks for itself. I wouldn't trust anyone else!"
            stars={5}
          />
          <ReviewCard
            name="Kelsey M."
            age="2 months ago"
            desc="Makayla always makes me feel like a queen! Her skill and care are top-notch. My skin and lashes have never looked better!"
            stars={5}
          />
          <ReviewCard
            name="Sarah P."
            age="2 months ago"
            desc="Makayla's work is pure magic! She takes her time to ensure perfection. I always leave her studio feeling fabulous!"
            stars={4}
          />
          <ReviewCard
            name="Jessica L."
            age="2 months ago"
            desc="Every visit with Makayla is a treat! Her passion for her craft shows in every detail. I'm beyond satisfied every single time."
            stars={5}
          />
          <ReviewCard
            name="Rachel C."
            age="3 months ago"
            desc="Makayla is not only talented but also so sweet and professional. My lashes last so long, and I get compliments everywhere I go!"
            stars={3}
          />
          <ReviewCard
            name="Ashley T."
            age="4 months ago"
            desc="If you're looking for perfection, Makayla's studio is the place to go. She's incredibly talented and makes every appointment so enjoyable!"
            stars={5}
          />
          <ReviewCard
            name="Emily F."
            age="4 months ago"
            desc="Makayla's expertise is unmatched. She truly listens to what you want and delivers stunning results every time. Highly recommended!"
            stars={5}
          />
        </div>
        <button className="arrow-icon" onClick={nextCard}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  );
}

export default HomeReviews;
