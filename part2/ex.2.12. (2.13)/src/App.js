import { useEffect, useState } from 'react'
import SearchField from './components/SearchField'
import FilterSearch from './components/FilterSearch'
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([]) 
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  /** When change in the input field happens,
   * sets the state to match new input.
   */
  const handleSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  return (
    <div>
      <SearchField searchField={searchField} handleSearchChange={handleSearchChange}/>
      <FilterSearch countries={countries} searchField={searchField} />
    </div>
  )
}

export default App
