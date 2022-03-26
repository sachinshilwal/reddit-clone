import axios from 'axios'

const redditApiContents = axios.create({
   
})

let oauthApi = axios.create({ 
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
    },
    defaultHeader(userinfo){
        oauthApi.defaults.headers.common['Authorization'] = `Bearer ${userinfo.access_token}` 
    },
    oauth(request){
        return oauthApi.get(request)

    },
    Vote(request){
        return oauthApi.post(request)
    }
}

