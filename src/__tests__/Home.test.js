import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from '../components/Home'
import { BrowserRouter } from 'react-router-dom'

describe(`Home Component`, () => {
  const stories = [
    {id: 1, name: 'test', rating: 5},
    {id: 12, name: 'test2', rating: 3},
  ]

  it('renders without errors wit given props', () => {

    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Home stories={stories}/>
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('matches the snapshot', () => {
    const wrapper = shallow(<Home stories={stories}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})