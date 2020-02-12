import React from 'react';
import Counter from './Counter'
import App from './App'
import { shallow , mount} from 'enzyme';

describe('Learning', () => {
    
    let wrapper;
    beforeEach(() => {
        //wrapper = shallow( <Counter / > )
        wrapper = mount(<App />)
        console.log(wrapper.debug())
    })

    test("render a button with text of `increment`", () => {    
        expect(wrapper.find("#increment-btn").text()).toBe("Increment")
    })

    test("render h1 with text ", () => {
        expect(wrapper.find("h1").text()).toContain("This is counter app")
    })

    test("teste counter", () => {
        expect(wrapper.find("#counter-value").text()).toBe("0")
    })
})