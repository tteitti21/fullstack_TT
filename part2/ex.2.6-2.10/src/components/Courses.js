const Courses = ( {courses} ) => {
    return (
      <div>
        {courses.map(course => 
          <Course key={course.id} course={course}/>
        )}
      </div>
    )
  }
  
  const Course = ( {course} ) => {
    let sum = course.parts.reduce(
      (partialSum, indexValue) => partialSum + indexValue.exercises, 0
      )
  
    return (
      <>
        <h1>{course.name}</h1>
        <ul style={{"listStyleType":"none", padding:0}}>
          {course.parts.map(part =>
            <Content key={part.id} part={part}/>
            )}
        </ul>
        <div>
          <b>total of {sum} exercises</b>
        </div>
      </>
    )
  }
  
  const Content = ({ part }) => (
    <li style={{paddingBottom:"2%"}}>{part.name} {part.exercises}</li>
  )

  export default Courses