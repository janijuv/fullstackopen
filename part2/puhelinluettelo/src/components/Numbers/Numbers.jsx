const Numbers = ({ showAll, persons, filteredPersons }) => {
    return (
      <ul>
        {
          showAll
            ? persons.map(person => <li key={person.id}>{person.name} {person.number}</li>)
            : filteredPersons.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
    )
  }

  export default Numbers