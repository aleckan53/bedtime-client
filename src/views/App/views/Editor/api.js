import config from 'config'

export default {
  uploadStory(content) {
    return fetch(`${config.API_ENDPOINT}/stories`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${window.sessionStorage.getItem(config.TOKEN_NAME)}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({content})
    })
    .then(res => !res.ok ? res.json().then(err => Promise.reject(err)) : res.json()) 
  }
}