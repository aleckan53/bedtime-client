import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Story from '../components/Story'
import { BrowserRouter } from 'react-router-dom'
import config from 'config'

describe(`Story Component`, () => {
  const stories = [
    {id: 1, name: 'test', rating: 5},
    {id: 12, name: 'test2', rating: 3},
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Story match={{params: {id: 1}, isExact: true, path: "", url: ""}}  stories={stories}/>
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })
  describe('Unauthorized', () => {
    it('matches the snapshot', () => {
      const wrapper = shallow(<Story stories={stories} match={{params: {id: 1}, isExact: true, path: "", url: ""}}/>)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
  describe('Authorized', () => {
    it('matches the snapshot', () => {
      window.sessionStorage.setItem(config.TOKEN_NAME, 'test')

      const wrapper = shallow(<Story stories={stories} match={{params: {id: 1}, isExact: true, path: "", url: ""}}/>)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
})