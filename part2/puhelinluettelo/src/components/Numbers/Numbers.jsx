const Numbers = ({ 
  showAll, 
  persons,
  deleteEntry
  }) => {
    console.log("Persons:", persons)
    return (
      <ul>
        {
          showAll
            ? persons.map(person =>            
                <span key={person.id}>
                  <li key={person.id}>{person.name} {person.number}</li>
                  <button onClick={deleteEntry} id={person.id} name={person.name}>delete</button>
                </span>
              
            )
            : filteredPersons.map(person => 
                <span key={person.id}>
                  <li key={person.id}>{person.name} {person.number}</li>
                  <button onClick={deleteEntry} key={person.id}>delete</button>
                </span>
              
          )}
      </ul>
    )
  }

  export default Numbers