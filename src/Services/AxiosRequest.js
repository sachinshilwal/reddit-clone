import axios from 'axios'

const redditApiContents = axios.create({
    baseURL: '',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getdata(request){
        return redditApiContents.get(request)
    }
}

