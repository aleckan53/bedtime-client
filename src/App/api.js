import config from 'config'
import axios from 'axios'

export default {
  getStoriesList() {
    return axios.get(`${config.API_ENDPOINT}/stories`)
      .then(res => res.data)
      .catch(console.error)
  }
}