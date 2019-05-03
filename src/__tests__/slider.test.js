import Slider from 'views/App/views/Home/components/Stack'
import { renderHook, act } from 'react-hooks-testing-library'

describe('<Slider/>', () => {

  it('should render items given array of items as props', () => {

    const { result } = renderHook(() => Slider({data: []}))

    console.log(result.current)
  })
})
