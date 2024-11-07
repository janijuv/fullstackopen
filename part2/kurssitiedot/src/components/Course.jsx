import Content from "./Content";
import Header from "./Header";


const Course = ({course}) => {
  //const parts = course.parts.map(part => <Part part = {part} />);
  return (
    <div>
      <Header courseName = {course.name}/>
      <Content parts = {course.parts} />
    </div>
   )
}

export default Course