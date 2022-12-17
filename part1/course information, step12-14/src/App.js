import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
  <button onClick={handleClick} >
    {text}
  </button>
  )
}

/** Returns random integer between 0 and parameter list length */
const choice = (list) => Math.floor(Math.random() * list.length)

/** Prevents the same options coming twice in a row by recalling
 * the function until new index value has been generated.
 */
const newChoice = (list, state) => {
  let index = choice(list)
  index = (index == state ? newChoice(list): index)
  return (
   index
  )
}

/** Adds vote to the current anecdote in a copy object
 * and returns the object
 */
const addVote = (votes, index) => {
  let voteCopy = {...votes}
  voteCopy[index] += 1
  return (
    voteCopy
  )
}

/** Displays the anecdote with the highest score */
const DisplayTopScore = ( {anecdotes, votes} ) => {
  let values = Object.values(votes)
  let highestScore = Math.max(...values)
  let topAnecdote = ''
  for (let [key, value] of Object.entries(votes)) {
    if (value == highestScore) {
      topAnecdote = anecdotes[key]
    }
  }
  return (
    <>
      <h1> Anecdote with most votes</h1>
      <div>{topAnecdote}</div>
      <div>has {highestScore}</div>
    </>
  )
}

/** Dsiplays the current anecdote and its votes */
const DisplayCurrent = ( {anecdotes, selected, votes} ) => (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        { anecdotes[selected] }
      </div>
      <div>
        has { votes[selected] } votes
      </div>
    </>
  )


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5:0, 6:0  
  })

  return (
    <>
      <DisplayCurrent anecdotes={anecdotes} selected={selected} votes={votes} />
      <Button handleClick={() => setSelected(newChoice(anecdotes,selected))} text='Generate anecdote' />
      <Button handleClick={() => setVotes(addVote(votes,selected))} text='vote' />
      <DisplayTopScore anecdotes={anecdotes} votes={votes} />
    </>
  )
}

export default App
