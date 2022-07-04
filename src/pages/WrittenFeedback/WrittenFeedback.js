import React, { useState } from 'react'
import useWrittenFeedback from '../../Hooks/useWrittenFeedback'
import Loading from '../Loading/Loading';
import FeedbackTemplate from './FeedbackTemplate';

function WrittenFeedback() {
    const [feedbacks, error, loading] = useWrittenFeedback();
    console.log(feedbacks)
    if(loading){
        return <Loading></Loading>
    }
  return (
    <div className='written-feedback-container'>
        {
            feedbacks.map((feedback, i)=> <FeedbackTemplate feedback={feedback} key={i}></FeedbackTemplate>)
        }
    </div>
  )
}

export default WrittenFeedback