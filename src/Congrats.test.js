import React from 'react'
import Enzyme,{shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {checkProp} from '../test/testUtils'

import {findByTestAttr} from '../test/testUtils'
import Congrats from './Congrats'

Enzyme.configure({adapter:new Adapter()})

const defaultProps = {succes:false}

const setup = (props={})=>{ 

const setupProps = {...defaultProps, ...props }

return shallow(<Congrats {...setupProps}/>)

}



test('Renders without error',()=>{
const wrapper = setup({succes:false})
const component = findByTestAttr(wrapper,'component-congrats')
expect(component.length).toBe(1)
})


test('Renders no text when succes prop is false',()=>{
const wrapper = setup({succes:false});
const component = findByTestAttr(wrapper,'component-congrats')
expect(component.text()).toBe('')
})



test('Renders a no empty congrats message when succes prop is true',()=>{
    const wrapper = setup({succes:false});
    const message = findByTestAttr(wrapper,'congrats-message')
    expect(message.text().length).not.toBe('')
})


test('dont throw a warning with expected props',()=>{
    const  expectedProps = {succes:false}
     checkProp(Congrats,expectedProps )
})