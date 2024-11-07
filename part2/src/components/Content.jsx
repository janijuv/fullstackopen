import Part from "./Parts"

const Content = ({parts}) => {
    return (
      <div>
        <ul>
          {parts.map(part => <Part part = {part}/>)}
        </ul>
      </div>
    )
  }

  export default Content