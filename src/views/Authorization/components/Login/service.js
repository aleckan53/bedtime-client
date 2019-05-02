export const genAttributes = ({state, setState}) => ({
  user_name: {
    name: 'user_name',
    type: 'text',
    autoFocus: state.values.user_name ? '' : true,
    value: state.values.user_name || '',
    autoComplete: 'username',
    required: true,
    onChange: e => setState({
      ...state,
      values: {
        ...state.values,
        user_name: e.target.value
      }
    })
  },
  password: {
    name: 'password',
    type: 'password',
    value: state.values.password || '',
    autoFocus: !state.values.user_name ? '' : true,
    autoComplete: 'current-password',
    required: true,
    onChange: e => setState({
      ...state,
      values: {
        ...state.values,
        password: e.target.value
      }
    })
  }
})