import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({course}) => {
  const total = course.parts
    .map(course => course.exercises)
    .reduce((sum, current)=> {
      return sum + current
    });
  
return (
    <div>
      <Header courseName = {course.name}/>
      <Content parts = {course.parts} />
      <Total total = {total} />
    </div>
   )
}

export default Course