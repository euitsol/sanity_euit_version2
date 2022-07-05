import React, { useState } from 'react'
import useWrittenFeedback from '../../Hooks/useWrittenFeedback'
import Loading from '../Loading/Loading';
import FeedbackTemplate from './FeedbackTemplate';
import './WrittenFeedback.css'

function WrittenFeedback() {
    const [feedbacks, error, loading] = useWrittenFeedback();
    console.log(feedbacks)
    if(loading){
        return <Loading></Loading>
    }
  return (
    <div className='written-feedback-container'>
      <h2 className='written-feedback-top'>Written feedback of our student</h2>
        {
            feedbacks.map((feedback, i)=> <FeedbackTemplate feedback={feedback} key={i}></FeedbackTemplate>)
        }
    </div>
  )
}

export default WrittenFeedback