import axios from 'axios'

export default () => {
    //Axios common object creation
    return axios.create({
        baseURL: 'http://localhost:4000/'
    })
}