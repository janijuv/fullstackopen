import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const createPerson = personObject => {
    return axios.post(baseUrl, personObject)
}

const deletePerson = id => {
    const request = axios.delete(`baseUrl/${id}`);
    request.then(() => {
      const newPersons = data.filter(item => item.id !==id);
      setPersons(newPersons);
    })
    .catch(error => {
      console.log("ERROR:", error);
    });
}

export default {
    create: createPerson,
    delete: deletePerson
}