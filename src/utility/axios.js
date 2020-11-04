import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"https://dev.x3m.solutions/api",
    headers:{
        Authorization:"pEmi3guzbvMTHKzuf7CJBAxyDXr6NJ17"
    }
})

export default axiosInstance