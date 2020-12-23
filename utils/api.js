import axios from 'axios';
const config = {
    headers: {
        // value: 111
    },
    // withCredentials: true,
    timeout: 6000
}
axios.defaults.withCredentials = true 
let Axios = axios.create(config)

Axios.interceptors.request.use((config) => {
    console.log(config)
    // config.headers.id = 'test'
    config.headers = {
        ...config.headers,
        token: 'wang'
    }
    return config
}, err => {
    console.log(err, 111)
})

Axios.interceptors.response.use((response) => {
    if (response.status === 200) {
        return Promise.resolve(response.data);
    }
    return Promise.reject('请求错误')
})

export default Axios;