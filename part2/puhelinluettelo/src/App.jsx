import { useEffect, useState } from 'react'
import axios from 'axios'
import EntryAdder from './components/EntryAdder/EntryAdder.jsx'
import Filtering from './components/Filtering/Filtering.jsx'
import Numbers from './components/Numbers/Numbers.jsx'
import Notification from './components/Notification/Notification.jsx'
import PersonService from './services/persons.jsx'

const App = () => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [persons, setPersons] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/persons')
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
        window.alert(`Person with number ${newNumber} is already added to phonebook`);
      } else {
        const conf = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
        if (!conf) {return false}
        const personObject = {
          id: existingPerson.id,
          name: existingPerson.name,
          number: newNumber
        }
        PersonService.update(personObject)
          .then(response => {
            setPersons(
              persons.map(person => person.id !== response.data.id ? person : response.data))
            })
        setNotificationMessage(`Updated ${newName}`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      PersonService.create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data));
        })
        setNotificationMessage(`Added ${newName}`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
    }
    setNewName('');
    setNewNumber('');
  }

  const deleteEntry = (event) => {
    event.preventDefault();
    if (window.confirm("Delete " + event.target.name + "?")) {
      PersonService.delete(event.target.id)
      .then(response => {
        PersonService
          .getAll()
          .then(response => {
          setPersons(response.data)
        }).then(() => {
        setNotificationMessage(`deleted ${event.target.name}`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
    })
    .catch(error => {
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
      <Notification message={notificationMessage} />
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