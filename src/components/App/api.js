import config from 'config'

export default {
  getStoriesList() {
    return fetch(`${config.API_ENDPOINT}/stories`)
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
      .catch(console.error)
  }
}