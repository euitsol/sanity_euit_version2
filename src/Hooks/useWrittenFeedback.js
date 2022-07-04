import { useEffect, useState } from "react"
import sanityClient from '../client'

const useWrittenFeedback = ()=>{
    const [feedback, setFeedback] = useState({feedbacks: [], error:'', loading:true})
    const {feedbacks, error, loading} = feedback;
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const feedbacks = await sanityClient.fetch(`*[_type=="written_feedback"]{
                    name,
                    rating,
                    image{
                        asset->{
                            url
                        }
                    },
                    message
                }`)
                setFeedback({feedbacks, loading:false})
            }catch(err){
                setFeedback({error: err.message, loading: false})

            }
        }
        fetchData()
    }, [])
    return [feedbacks, error, loading]
}

export default useWrittenFeedback;