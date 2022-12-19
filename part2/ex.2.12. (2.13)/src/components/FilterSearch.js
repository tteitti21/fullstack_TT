import { useState } from "react"

/** Using regular experrions narrows search results when user inputs more characters. */
const FilterSearch = ({countries, searchField}) => {
    const countriesToShow = countries.filter(
      country => country.name.common.toLowerCase().search(
        new RegExp(searchField.toLowerCase())) !== -1
        )
      if (countriesToShow.length > 10) {
        return (
        <table>
          <tbody>
            <tr>
              <th style={{textAlign:"left", fontWeight:"normal"}}>
                Too many matches, specify another filter
                </th>
            </tr>
          </tbody>
        </table>
        )
      }
      else {
      return (
        <table>
          <tbody>
            { countriesToShow.map(country => <DisplayCountry key={country.name.official} country={country}/>) }
          </tbody>
        </table>
      )
    }
   }

/** Button for making country information visible */
const Button = ( {onClick, text} ) => (
  <button onClick={onClick}>
    {text}
  </button>
)

/** Displays information of the country if it has been clicked to visible
 * , otherwise displays only name and button to make it visible.
 */
const DisplayCountry = ({ country }) => {

  const [visible, setVisible] = useState(false)

  if (visible === true) {
    return (
      <>
        <tr>
            <th style={{textAlign:"left", fontWeight:"normal"}}>
              <h1>{country.name.common}</h1>
            </th>
            <th><Button onClick={() => setVisible(!visible)} text='hide' /></th>
        </tr>
        <tr>
            <th style={{textAlign:"left", fontWeight:"normal"}}>capital:</th>
            <th style={{textAlign:"left", fontWeight:"normal"}}>{country.capital}</th>
        </tr>
        <tr>
            <th style={{textAlign:"left", fontWeight:"normal"}}>area:</th>
            <th style={{textAlign:"left", fontWeight:"normal"}}>{country.area}</th>
        </tr>
        <tr>
            <th style={{textAlign:"left", fontWeight:"normal", paddingTop:'5%'}}>
              <b>languages:</b></th>
        </tr>
        <tr>
          <th style={{textAlign:"left", fontWeight:"normal"}}>
            <ul>
            { Object.values(country.languages).map(language => <li key={language}>{language}</li> )}
            </ul>
          </th>
        </tr>
        <tr>
          <th style={{ paddingTop:'10%'}}>
            <img src={country.flags.png} />
          </th>
        </tr>
      </>
    )
  }
  else {
    return (
      <>
        <tr>
            <th style={{textAlign:"left", fontWeight:"normal"}}>
              {country.name.common}
            </th>
            <th>
              <Button onClick={() => setVisible(!visible)} text='show' />
            </th>
        </tr>
      </>
    )
  }
}

 export default FilterSearch