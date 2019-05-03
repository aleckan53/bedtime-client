import App from 'views/App'
import { renderHook, act } from 'react-hooks-testing-library'

describe('<App/>', () => {
  it('should has stories in state', () => {
    const { result, rerender } = renderHook(() => App())

    console.log(rerender.current.state)

    act(() => result.current)

  })
})