import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad}) => {
  let all = good+neutral+bad
  let average = good/(good+neutral+bad)*100
  
  return (
      <table>
        <tbody>
          <tr><StatisticLine text='good' value={ good } /></tr>
          <tr><StatisticLine text='neutral' value={ neutral } /></tr>
          <tr><StatisticLine text='bad' value={ bad } /></tr>

          <tr><td>all</td><td>{(good+neutral+bad)}</td></tr>
          <tr><td>average</td><td>{ (good-bad)/all }</td></tr>
          <tr><td>positive</td><td>{ average.toFixed(14) + ' %' }</td></tr>
        </tbody>
      </table>
  )
}

const StatisticLine = ({ text, value }) => (
  <><td>{ text }</td><td>{ value }</td></>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }
  const handleNeutralClick = () => setNeutral(neutral+1)
  const handleBadClick = () => setBad(bad+1)

  if (good === 0 && neutral === 0 && bad === 0) {
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />

      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  )}
  else {
    return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
    )
  }
}

export default App
