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
      if (window.confirm(`${newName} is already added to phonebook,
      replace the old number with a new one?`)) {
        let person = persons.find(n => n.name === newName)
        const updatedObject = {
          name: newName,
          number: newNumber,
        }
        AxiosCalls.update(person.id, updatedObject)
        .then(updatedEntry => {
        setPersons(persons.map(p => p.id !== person.id ? p : updatedEntry))
        setNewName('')
        setNewNumber('')
        })
      }
    }
  }
  // Event handlers
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setSearchField(event.target.value)
  }
  const handleDeletion = (event) => {
    let person = persons.find(person => person.id === parseInt(event.target.id))
    if (window.confirm(`Delete ${person.name} ?`)){
    AxiosCalls
    .deletePerson(event.target.id)
    .then(setPersons(
      persons.filter(person => person.id !== parseInt(event.target.id))))
    }
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
      <FilterSearch persons={persons} searchField={searchField} 
        handleDeletion={handleDeletion}/>
    </div>
  )
}

export default App
