import React from "react";
import Course from './components/Course'

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
          exercises: 1,
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

/*const total = course.parts
    .map(course => course.exercises)
    .reduce((sum, current)=> {
      return sum + current;
}*/

/*const course = courses.map(course => {
    console.log("COURSE: " , course);
    <div>;
      <p>asdfaffa</p>
    <Course course = {course} />
    </div>
    }
);*/
  return (
    <div>
      <p>Courses</p>
      <p>jani</p>
      {courses.map(course => (
        <Course key={course.id} course={course}/>
      )
      )
    }
    </div>
  )
}
export default App