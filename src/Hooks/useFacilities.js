import React, { useEffect, useState } from 'react'

function useFacilities() {
    const [facilities, setFacilities] = useState([])
    useEffect(() => {
        fetch('facilities.json')
            .then(res => res.json())
            .then(data => setFacilities(data))
    }, [])
  return [facilities, setFacilities]
}

export default useFacilities