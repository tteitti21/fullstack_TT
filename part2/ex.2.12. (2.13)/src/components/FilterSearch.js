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

const DisplayCountry = ({ country }) => {
    return (
      <>
        <tr>
            <th style={{textAlign:"left", fontWeight:"normal"}}>
              <h1>{country.name.common}</h1></th>
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
            <th style={{textAlign:"left", fontWeight:"normal", paddingTop:'10%'}}>
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
          <th style={{ paddingTop:'15%'}}>
            <img src={country.flags.png} />
          </th>
        </tr>
      </>
    )
}

 export default FilterSearch