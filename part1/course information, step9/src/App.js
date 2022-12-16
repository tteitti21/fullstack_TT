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
      <>
        <StatisticLine text='good' value={ good } />
        <StatisticLine text='neutral' value={ neutral } />
        <StatisticLine text='bad' value={ bad } />

        <div>all {(good+neutral+bad)}</div>
        <div>average { (good-bad)/all }</div>
        <div>positive { average.toFixed(14) + ' %' }</div>
      </>
  )
}

const StatisticLine = ({ text, value }) => (
  <div>{ text } { value }</div>
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
