import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const createPerson = personObject => {
    return axios.post(baseUrl, personObject)
}

export default {
    create: createPerson
}