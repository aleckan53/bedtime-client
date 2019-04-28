import axios from 'axios'
import config from 'config'

export default {
  getStoryById(id) {
    return axios.get(`${config.API_ENDPOINT}/stories/${id}`)
      .then(res => res.data)
      .catch(console.error)
  }
}