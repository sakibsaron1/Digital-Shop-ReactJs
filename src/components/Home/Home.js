import { Link } from 'react-router-dom';
import './Home.css';
import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';

const Home = () => {

    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setReviews(data.slice(0, 3)))
    }, [])


    return (
        <div>
            <br /><div className='bike-area'><br />
                <div className="bike-text">
                    <h1>Digital Bike Shop</h1> <br />
                    <p>bicycle, also called bike, two-wheeled steerable machine that is pedaled by the rider’s feet. On a standard bicycle the wheels are mounted in-line in a metal frame, with the front wheel held in a rotatable fork. The rider sits on a saddle and steers by leaning and turning handlebars that are attached to the fork. The feet turn pedals attached to cranks and a chainwheel. Power is transmitted by a loop of chain connecting the chainwheel to a sprocket on the rear wheel. Riding is easily mastered, <br></br> and bikes can be ridden with little effort at 16–24 km (10–15 miles) per hour—about four to five times the pace of walking. The bicycle is the most efficient means yet devised to convert human energy into mobility.
                    bicycle, also called bike, two-wheeled steerable machine that is pedaled by the rider’s feet. On a standard bicycle the wheels are mounted in-line in a metal frame, with the front wheel held in a rotatable fork. The rider sits on a saddle and steers by leaning and <br></br>turning handlebars that are attached to the fork. The feet turn pedals attached to cranks and a chainwheel. Power is transmitted by a loop of chain connecting the chainwheel to a sprocket on the rear wheel.<br></br> Riding is easily mastered, and bikes can be ridden with little effort at 16–24 km (10–15 miles) per hour—about four to five times the pace of walking. The bicycle is the most efficient means yet devised to convert human energy into mobility.Riding is easily mastered, and bikes can be ridden with little effort at 16–24 km (10–15 miles) per hour—about four to five times the pace of walking. The bicycle is the most efficient means yet devised to convert human energy into mobility.
                    </p>
                </div>
                <div className="bike-img">
                    <img src="bike.png" alt="" />
                </div>
            </div>
            <div className='items-area'>
                <h2>Show only 3 Reviews Here</h2><br />
            {
                reviews.map( review => <Reviews key={review.id} review={review}></Reviews>)
            }

            <button className='button'><Link to="/review"> View All Reviews</Link></button>
            </div>

            <div className='description-area'>
                <h2></h2>
            </div>
        </div>
    );
};

export default Home;