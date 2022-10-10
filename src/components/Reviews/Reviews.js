import React from 'react';
import './Reviews.css';

const Reviews = (props) => {
    const {name, comment, ratings} = props.review;
    return (
        <div className='review-area'>
            <div className='review'>
                <h3>Name : {name}</h3>
                <h4>Comments : {comment}</h4>
                <h4>Ratings : {ratings}</h4>
            </div>
        </div>
    );
};

export default Reviews;