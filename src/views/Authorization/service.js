export default {
  validate: {
    user_name (user_name) {
      const regex = /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
      return regex.test(user_name)
    },
    password (password) {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      return regex.test(password)
    },
    first_name (name) {
      const regex = /^[a-z ,.'-]+$/i
      return regex.test(name)
    },
    last_name (name) {
      return this.first_name(name)
    }
  },
  showErr (err) {
  }

}