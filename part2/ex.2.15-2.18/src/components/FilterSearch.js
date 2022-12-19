/** Using regular experrions narrows search results when user inputs more characters. */
const FilterSearch = ({persons, searchField}) => {

    const personsToShow = persons.filter(
      person => person.name.toLowerCase().search(
        new RegExp(searchField.toLowerCase())) !== -1
        )
  
      return (
        <table>
          <tbody>
            { personsToShow.map(person => <DisplayPerson key={person.id} person={person}/>) }
          </tbody>
        </table>
      )
   }

const DisplayPerson = ({ person }) => {
    return (
        <tr>
            <th style={{textAlign:"left", fontWeight:"normal"}}>{person.name}</th>
            <th style={{textAlign:"left", fontWeight:"normal"}}>{person.number}</th>
        </tr>
    )
}

 export default FilterSearch