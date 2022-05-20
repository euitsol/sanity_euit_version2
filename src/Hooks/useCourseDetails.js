import { useEffect, useState } from "react"
import sanityClient from '../client'

const useCourseDetails = (slug) =>{
    const [courseDetails, setCourseDetails] = useState({course_prod: [],error: '',loading: true,});
    const { loading, error, course_prod } = courseDetails;
    useEffect(() => {
    const fetchData = async () => {
        try {
        const course_prod = await sanityClient.fetch(`*[_type == "course_product" && slug.current == "${slug}"]{
            course_name,
            course_price,
            course_duration,
            total_class,
            slug{
                current
            },
            image{
                asset->{
                    url
                }
            },
            course_module,
            highlight,
            topics,
            software_taught,
            career_support
        }`);
        setCourseDetails({ course_prod, loading: false });
        } catch (err) {
            setCourseDetails({ loading: false, error: err.message });
        }
    };
    fetchData();
    }, []);
    
    return [courseDetails, loading, error, course_prod]
}

export default useCourseDetails;