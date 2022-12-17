
const Course = ( {course} ) => {
  return (
    <>
      <h1>Half Stack application development</h1>
      <ul>
        {course.parts.map(part =>
          <Content key={part.id} part={part}/>
          )}
      </ul>
    </>
  )
}

const Content = ({ part }) => (
  <li>{part.name} {part.exercises}</li>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
