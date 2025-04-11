import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const createPerson = personObject => {
    return axios.post(baseUrl, personObject);
}

const deletePerson = id => {
    return axios.delete(baseUrl + "/" + id);
}

const updatePerson = personObject => {
    return axios.put(baseUrl + "/" + personObject.id, personObject);
}

export default {
    create: createPerson,
    delete: deletePerson,
    update: updatePerson
}