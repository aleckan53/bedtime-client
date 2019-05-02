import config from 'config'

export default {
  login (data) {
    console.log(data)
  },
  signup (data) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
  }
}