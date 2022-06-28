import { useEffect, useState } from 'react'
import sanityClient from '../client'

function useFacilities() {
    const [facilities, setFacilities] = useState([])
    useEffect(() => {
        const fetchData = async () =>{
          const datas = await sanityClient.fetch(`*[_type=="facilities"]{
            title,
            icon,
            details
          }`);
          setFacilities(datas)
        }
        fetchData()
    }, [])
  return [facilities, setFacilities]
}

export default useFacilities