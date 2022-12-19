import { useEffect, useState } from 'react'
import SearchField from './components/SearchField'
import FormField from './components/FormField'
import FilterSearch from './components/FilterSearch'
import AxiosCalls from './services/AxiosCalls'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    AxiosCalls
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  /** Adds persons to phonebook if similar name doesnt exist */
  const addPerson = (event) => {
    event.preventDefault()
    if (!persons.map(person => person.name).includes(newName)) {
    const phonebookObject = {
      name: newName,
      number: newNumber,
    }
    AxiosCalls
      .postAll(phonebookObject)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
      })
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  /** When change in the input field happens,
   * sets the state to match new input.
   */
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  /** When change in the input field happens,
   * sets the state to match new input.
   */
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchField searchField={searchField} handleSearchChange={handleSearchChange}/>
      <h2>add a new</h2>
      <FormField addPerson={addPerson} newName={newName} newNumber={newNumber} 
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
      <FilterSearch persons={persons} searchField={searchField} />
    </div>
  )
}

export default App
