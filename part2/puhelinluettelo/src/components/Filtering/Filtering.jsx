const Filtering = ({setShowAll, handle}) => {
    return (
     <form onChange={() => setShowAll} >
     <div>
       filter shown with: <input onChange={handle}/> 
     </div>
     </form>
   )
   }
   
export default Filtering   