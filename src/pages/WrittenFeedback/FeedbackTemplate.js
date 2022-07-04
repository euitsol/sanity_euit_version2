import React from 'react'

function FeedbackTemplate(props) {
    const {feedback} = props;
  return (
    <div className='card'>
        <div className='image'>
            <img src={feedback?.image.asset.url}></img>
            <p>{feedback.rating}</p>
        </div>
        <div className='text'>
            <p>{feedback.message}</p>
        </div>
    </div>
  )
}

export default FeedbackTemplate