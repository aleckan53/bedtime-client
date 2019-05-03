import axios from 'axios'
import config from 'config'

export default {
  getStoryById(id) {
    return axios.get(`${config.API_ENDPOINT}/stories/${id}`, {
      headers: {
        'Authorization': `Bearer ${window.sessionStorage.getItem(config.TOKEN_NAME)}`
      }
    })
      .then(res => res.data)
      .catch(console.error)
  }
}