import { useEffect, useState } from 'react';
import sanityClint from '../client';

export default function useNews(){
    const [newses, setNewses] = useState({news:[], loading: true, error: ''})
    const {news, loading, error} = newses;
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const newsData = await sanityClint.fetch(`*[_type=="news"]{
                    title,
                    author,
                    categories,
                    publishedAt,
                    body,
                    slug{
                        current
                    },
                    image{
                        asset->{
                            url
                        }
                    },
                }`)
                setNewses({newsData, loading: false})

            }catch(err){
                setNewses({loading:false, error: err.message})
            }
        }
        fetchData();
    }, []);
    return [news, loading, error]
}