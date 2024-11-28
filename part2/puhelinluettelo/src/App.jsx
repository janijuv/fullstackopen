import { useState } from 'react'
import EntryAdder from './components/EntryAdder/EntryAdder.jsx'
import Filtering from './components/Filtering/Filtering.jsx'
import Numbers from './components/Numbers/Numbers.jsx'

const App = () => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1231244',
      id: '1'
    },
    {
      name: 'Mete',
      number: '040-1231244',
      id: '2'
    },
    {
      name: 'Jani',
      number: '040-1231244',
      id: '3'
    }

  ]);
  const [showAll, setShowAll] = useState(true);

  const [filteredPersons, setFilteredPersons] = useState([]);

  const addName = (event) => {
    event.preventDefault();
    console.log("addname", event.target.value);
    if (persons.find(p => p.name === newName && p.number === newNumber)) {
      window.alert(`${newName} with number ${newNumber} is already added to phonebook`);
    } else {
      console.log("newnumber", newNumber);
      const personObject = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1)
      }
      console.log("setPersons");
      setPersons(persons.concat(personObject));
    }
    setNewName('');
    setNewNumber('');
  }

  const handleNameChange = (event) => {
    console.log("new name ", event.target.value);
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
    console.log("handleNumberchange", event.target.value);
  }

  const handleFiltering = (event) => {
    console.log(event.target.value);
    const nameFilter = event.target.value.toLowerCase();
    if (!nameFilter) {
      setShowAll(true);
    } else {
      setShowAll(false);
      const filteredPersons = persons.filter(p => p.name.toLocaleLowerCase().includes(nameFilter));
      setFilteredPersons(filteredPersons);
      console.log(filteredPersons);
    }

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filtering
        setShowAll={setShowAll}
        handle={handleFiltering}
      />
      <h2>add a new</h2>
      <EntryAdder
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Numbers showAll={showAll} persons={persons} filteredPersons={filteredPersons} />
    </div>
  )

}

export default App