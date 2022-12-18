import { useState } from 'react'
import SearchField from './components/SearchField'
import FormField from './components/FormField'
import FilterSearch from './components/FilterSearch'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchField, setSearchField] = useState('')

  /** Adds persons to phonebook if similar name doesnt exist */
  const addPerson = (event) => {
    event.preventDefault()
    if (!persons.map(person => person.name).includes(newName)) {
    const phonebookObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(phonebookObject))
    setNewName('')
    setNewNumber('')
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
