import { useEffect, useState } from 'react'
import sanityClient from '../client'

const useCourses = ()=>{
    const [courses, setCourses] = useState({course_prod: [],error: '',loading: true,});
    const { loading, error, course_prod } = courses;
    useEffect(() => {
    const fetchData = async () => {
        try {
        const course_prod = await sanityClient.fetch(`*[_type == "course_product"]{
            course_name,
            course_price,
            course_duration,
            total_class,
            image{
                asset->{
                    url
                }
            }
        }`);
        setCourses({ course_prod, loading: false });
        } catch (err) {
        setCourses({ loading: false, error: err.message });
        }
    };
    fetchData();
    }, []);
    
    return [courses, loading, error, course_prod]
}

export default useCourses;