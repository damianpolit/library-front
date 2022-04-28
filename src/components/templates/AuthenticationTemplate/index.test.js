import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import AuthenticationTemplate from '.'

Enzyme.configure({adapter: new Adapter()});

it('renders', () => {
    shallow(<AuthenticationTemplate />)
  })


//future tests

// const wrap = (props = {}) => (
//   shallow(<AuthenticationTemplate header="header" footer="footer" {...props}>test</AuthenticationTemplate>)
// )

// it('mounts', () => {
//   mount(<AuthenticationTemplate header="header" footer="footer">test</AuthenticationTemplate>)
// })
// it('renders header', () => {
//   const wrapper = wrap()
//   expect(wrapper.contains('header')).toBe(true)
// })

// it('renders footer', () => {
//   const wrapper = wrap()
//   expect(wrapper.contains('footer')).toBe(true)
// })