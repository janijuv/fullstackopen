import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

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
    getAll: getAll,
    create: createPerson,
    delete: deletePerson,
    update: updatePerson
}