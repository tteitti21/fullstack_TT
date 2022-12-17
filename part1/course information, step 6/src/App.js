import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
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

  const Show = (props) => (
    <div>{props.category.name} {props.category.state}</div>
  )

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />

      <h1>statistics</h1>
      <Show category={Data.good} />
      <Show category={Data.neutral} />
      <Show category={Data.bad} />

    </div>
  )
}

export default App
