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
  genAttributes ({state, setState}) {
    return {
      user_name: {
        name: 'user_name',
        type: 'text',
        placeholder: '4-20 characters',
        value: state.values.user_name || '',
        autoComplete: 'username',
        required: true,
      },
      password: {
        name: 'password',
        type: 'password',
        placeholder: '8-20 chars, at least 1 number',
        value: state.values.password || '',
        autoComplete: 'new-password',
        required: true,
      },
      first_name: {
        name: 'first_name',
        type: 'text',
        placeholder: 'Letters only',
        value: state.values.first_name || '',
        autoComplete: 'given-name',
      },
      last_name: {
        name: 'last_name',
        type: 'text',
        placeholder: 'Letters only',
        value: state.values.last_name || '',
        autoComplete: 'family-name',
      }
    }
  }
}