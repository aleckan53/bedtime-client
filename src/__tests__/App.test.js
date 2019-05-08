import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from '../components/App'
import { BrowserRouter } from 'react-router-dom'

describe(`App Component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders all routes', () => {
    const wrapper = shallow(<App />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})