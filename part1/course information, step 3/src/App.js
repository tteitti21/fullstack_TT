const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.ex}</p>
    </>
  )
}

const Content = (props) => {
  return(
  <>
    <Part part={props.data.part1.name} ex={props.data.part1.exercises} />
    <Part part={props.data.part2.name} ex={props.data.part2.exercises} />
    <Part part={props.data.part3.name} ex={props.data.part3.exercises} />
  </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.data.exercises1 + props.data.exercises2 + props.data.exercises3}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content data={{part1:part1, part2:part2, part3:part3}} />
      <Total data={{exercises1:part1.exercises, exercises2:part2.exercises, 
             exercises3:part3.exercises}} />

    </>
  )
}

export default App
