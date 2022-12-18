import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App
