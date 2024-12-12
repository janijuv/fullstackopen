import { useEffect, useState } from 'react'
import axios from 'axios'
import EntryAdder from './components/EntryAdder/EntryAdder.jsx'
import Filtering from './components/Filtering/Filtering.jsx'
import Numbers from './components/Numbers/Numbers.jsx'
import PersonService from './services/persons.jsx' 

const App = () => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
        setNewName('');
        setNewNumber('');
      })
  }, [])
  const [showAll, setShowAll] = useState(true);

  const [filteredPersons, setFilteredPersons] = useState([]);

  const addName = (event) => {
    event.preventDefault();
    const existingPerson = persons.find(p => p.name === newName)
    const existingNumber = persons.find(p => p.number === newNumber)
    if (existingPerson) {
      if (existingNumber) {
        window.alert(`${newName} with number ${newNumber} is already added to phonebook`);
      } else {
        const personObject = {
          name: existingPerson.name,
          number: newNumber,
          id: existingPerson.id
        }
        PersonService.update(personObject)
          .then(response => {
            setPersons(
              persons.map(person => person.id !== response.data.id ? person : response.data))
            })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1)
      }
      PersonService.create(personObject)
        .then(response => {
          setPersons(persons.concat(personObject));
        })
      setNewName('');
      setNewNumber('');
    }
  }

  const deleteEntry = (event) => {
    event.preventDefault();
    if (window.confirm("Delete " + event.target.name + "?")) {
    PersonService.delete(event.target.id)
      .then(response => {
        const responseData = response.data;
        const newPersons = persons.filter(person => person.id !== responseData.id);
        setPersons(newPersons);
      }).catch(error => {
        console.log("ERROR:", error);
      });
    }
  }
  
  const handleNameChange = (event) => {
    console.log("new name ", event.target.value);
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    console.log("new number", event.target.value);
    setNewNumber(event.target.value);
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
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Numbers 
        showAll={showAll} 
        persons={persons} 
        filteredPersons={filteredPersons}
        deleteEntry={deleteEntry} />
    </div>
  )

}

export default App