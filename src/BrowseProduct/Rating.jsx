import React from 'react';
import fullRating from '../assets/fullRating.png';
import halfRating from '../assets/halfRating.png';
import './ProductsPage.css'

function Rating({ rating }) {
    const intRating = Math.floor(rating);
    const decRating = rating - intRating;

    const starList = [];

    for (let i = 0; i < intRating; i++) {
        starList.push(<img key={i} src={fullRating} alt="Full Rating" className='rating'/>);
    }

    if (decRating >= 0.5) {
        starList.push(<img key={intRating} src={halfRating} alt="Half Rating" className='rating'/>);
    }

    return <><span>{starList}{" "+rating}</span></>;
}

export default Rating;