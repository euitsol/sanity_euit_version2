import { useEffect, useState } from 'react'
import sanityClient from '../client'

const useVideoFeedback = () =>{
    const [feedback, setFeedback] = useState({feedbacks: [], error:'', loading: true});
    const {feedbacks, error, loading} = feedback;
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const feedbacks = await sanityClient.fetch(`*[_type=="video_feedback"]{
                    video_link,
                }`)
                setFeedback({feedbacks, loading: false})
            }catch(err){
                setFeedback({loading: false, error:err.message})
            }
        }
        fetchData()
    }, [])
    return [feedbacks, error, loading]

}

export default useVideoFeedback;