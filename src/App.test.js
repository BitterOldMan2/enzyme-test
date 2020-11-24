import React from 'react'
import Enzyme,{shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';


Enzyme.configure({adapter:new Adapter()})

test('Renders no text when succes prop is false',()=>{

})
