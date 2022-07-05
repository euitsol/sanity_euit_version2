import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import './FeedbackTemplate.css'

function FeedbackTemplate(props) {
    const {feedback} = props;
  return (
    <div className='feedback-card'>
        <div className='image'>
            <img src={feedback?.image.asset.url}></img>
            <h3>{feedback.name}</h3>
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={feedback.rating}
        />
        </div>
        <div className='card-message'>
            <p>{feedback.message}</p>
        </div>
    </div>
  )
}

export default FeedbackTemplate