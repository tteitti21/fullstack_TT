const Header = (props) =>{
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) =>{
  return(
  <>
    <p>
      {props.data.part1} {props.data.ex.exercises1}
    </p>
    <p>
      {props.data.part2} {props.data.ex.exercises2}
    </p>
    <p>
      {props.data.part3} {props.data.ex.exercises3}
    </p>
  </>
  )
}

const Total = (props) =>{
  return(
    <>
      <p>
        Number of exercises {props.ex.exercises1 + props.ex.exercises2 + props.ex.exercises3}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const data = {
    part1: 'Fundamentals of React',
    part2: 'Using props to pass data',
    part3: 'State of a component',
    ex: {
      exercises1: 10,
      exercises2: 7,
      exercises3: 14,
    }
  }

  return (
    <div>
      <Header course={course} />
      <Content data={data} />
      <Total ex={data.ex} />
    </div>
  )
}

export default App
