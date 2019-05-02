import config from 'config'

export default {
  saveToken(token) {
    window.sessionStorage.setItem(config.TOKEN_NAME, token)
  },
}