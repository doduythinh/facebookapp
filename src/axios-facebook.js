import  axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://facebook-go.herokuapp.com/',
})

export default instance;