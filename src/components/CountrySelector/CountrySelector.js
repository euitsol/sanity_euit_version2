import React, { useMemo, useState } from 'react'
import countryList from 'react-select-country-list'
import Select from 'react-select'

function CountrySelector() {
    const [country, setCountry] = useState('')
  const options = useMemo(() => countryList().getData(), [])
  const changeHandler = value => {
    setCountry(value)
  }

  return <Select options={options} value={country} onChange={changeHandler} />
}


export default CountrySelector
