import axios, { type AxiosResponse } from 'axios'

const instance = axios.create({
  // baseURL: 'http://bridge.iotrouter.com:8082'
  baseURL: '/proxy_to_iotrouter'
})

instance.interceptors.response.use(
  (resp: AxiosResponse) => {
    const data = resp.data
    if (resp.status === 200) {
      return data
    } else {
      return Promise.reject(data)
    }
  },
  (err) => Promise.reject(err.response)
)

export default instance
