import Content from "./Content";
import Header from "./Header";


const Course = ({course}) => {
  console.log("Excerc", course);
  //const parts = course.parts.map(part => <Part part = {part} />);
  return (
    <div>
      <h1>sdfsdf course</h1>
      <Header courseName = {course.name}/>
      <Content parts = {course.parts} />
    </div>
   )
}

export default Course