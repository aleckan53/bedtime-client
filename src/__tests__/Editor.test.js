import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Editor from '../components/Editor'

describe(`Editor Component`, () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Editor />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})