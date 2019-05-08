import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Auth from '../components/Auth'
import { BrowserRouter } from 'react-router-dom'
import 'jest-fetch-mock'

describe(`Auth Component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Auth />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('matches the snapshot', () => {
    const wrapper = shallow(<Auth />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('siwtches form to Signup', () => {
    const wrapper = shallow(<Auth />)
    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.find('button').at(0).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()

  })
})