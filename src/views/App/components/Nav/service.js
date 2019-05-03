import config from 'config'

export default {
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_NAME)
  },
  clearAuthToken() {
    return window.sessionStorage.removeItem(config.TOKEN_NAME)
  }
}