import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';

const Review = () => {

    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    
    return (
        <div>
            <h1>Total Review {reviews.length}</h1>
            {
                reviews.map( review => <Reviews key={review.id} review={review}></Reviews>)
            }
        </div>
    );
};

export default Review;