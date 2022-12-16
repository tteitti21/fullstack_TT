import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Show = (props) => (
  <>
    <div>{props.category.good.name} {props.category.good.state}</div>
    <div>{props.category.neutral.name} {props.category.neutral.state}</div>
    <div>{props.category.bad.name} {props.category.bad.state}</div>
  </>
)

const Statistics = ({ good, neutral, bad}) => {
  let all = good+neutral+bad
  let average = good/(good+neutral+bad)*100
  
  return (
      <>
        <div>all {(good+neutral+bad)}</div>
        <div>average { (good-bad)/all }</div>
        <div>positive { average.toFixed(14) + ' %' }</div>
      </>
  )
}

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

  const Data = {
    good :{
      name: 'good',
      state: good,
    },
    neutral :{
      name: 'neutral',
      state: neutral,
    },    
    bad :{
      name: 'bad',
      state: bad,
    },
  }

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
      <Show category={Data} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
    )
  }
}

export default App
