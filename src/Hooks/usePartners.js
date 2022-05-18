import { useEffect, useState } from 'react'
import sanityClient from '../client'

const usePartners = ()=>{
    const [partners, setPartners] = useState(null);
    useEffect(() => {
    const fetchData = async () => {
        try {
        const data = await sanityClient.fetch(`*[_type == "partners"]{
            partner_name,
            image{
                asset->{
                    url
                }
            }
        }`);
        setPartners(data);
        } catch (err) {
        setPartners(err.message);
        }
    };
    fetchData();
    }, []);
    
    return [partners]
}

export default usePartners;