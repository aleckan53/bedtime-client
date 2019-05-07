import config from 'config'

export default {
  getStoryById(id) {
    return fetch(`${config.API_ENDPOINT}/stories/${id}`, {
      headers: {
        'Authorization': `Bearer ${window.sessionStorage.getItem(config.TOKEN_NAME)}`
      }
    })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
      .catch(console.error)
  }
}