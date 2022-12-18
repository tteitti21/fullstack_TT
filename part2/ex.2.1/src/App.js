
const Course = ( {course} ) => {
  let sum = course.parts.reduce(
    (partialSum, indexValue) => partialSum + indexValue.exercises, 0
    )

  return (
    <div>
      <h1>{course.name}</h1>
      <ul style={{"listStyleType":"none", padding:0}}>
        {course.parts.map(part =>
          <Content key={part.id} part={part}/>
          )}
      </ul>
      <div>
        <b>total of {sum} exercises</b>
      </div>
    </div>
  )
}

const Courses = ( {courses} ) => {
  return (
    <>
      {courses.map(course => 
        <Course key={course.id} course={course}/>
      )}
    </>
  )
}

const Content = ({ part }) => (
  <li style={{paddingBottom:"2%"}}>{part.name} {part.exercises}</li>
)

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses courses={courses} />
}

export default App
