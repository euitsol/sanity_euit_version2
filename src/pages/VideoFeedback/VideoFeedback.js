import React from 'react'
import useVideoFeedback from '../../Hooks/useVideoFeedback'
import './VideoFeedback.css'

function VideoFeedback() {
    const [feedbacks, error, loading] = useVideoFeedback();
    console.log(feedbacks)
  return (
    <div className='video-feedback-container'>
        {
            feedbacks.map((feedback, i)=><iframe key={i} id='video-feedback-video' 
            src={feedback.video_link}>
            </iframe>)
        }
    </div>
  )
}

export default VideoFeedback