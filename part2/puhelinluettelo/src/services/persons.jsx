import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const createPerson = personObject => {
    return axios.post(baseUrl, personObject)
}

const deletePerson = id => {
    return axios.delete(baseUrl + "/" + id);
}

export default {
    create: createPerson,
    delete: deletePerson
}