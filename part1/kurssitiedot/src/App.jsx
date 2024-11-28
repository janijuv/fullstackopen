const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    {name: part1, exercises: exercises1},
    {name: part2, exercises: exercises2},
    {name: part3, exercises: exercises3},
  ]

  const Header = ({course}) => {
    return (<h1>{course}</h1>);
  }

  const Total = ({total}) => {
    return (
      <p>Number of exercises {total}</p>
    )
  }
  const total = exercises1 + exercises2 + exercises3;
  
  const Content = ({parts}) => {
    console.log("course: ", parts);
    return (
      <div>
        <p>
          {parts[0].part1} {parts[0].exercises1}
        </p>
        <p>
          {parts[1].part2} {parts[1].exercises2}
        </p>
        <p>
          {parts[2].part3} {parts[2].exercises3}
        </p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <Total total = {total} />
    </div>
  )
}

export default App