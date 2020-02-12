import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('renders learn react link', () => {
  /*
  test("render the title of counter", () => {
		 const {getByText} = render(<App />)
		 const linkElement = getByText( 'This is counter app')
		 expect(linkElement).toBeInTheDocument();
  })
  */
  let wrapper;
  beforeEach(()=> {
    wrapper = shallow(<App />)    
  })
  
  test("render a button with text of `increment`", () => {
    wrapper = shallow(<App />)
    expect( wrapper.find("#increment-btn").text()).toBe("Increment")
  })

  test("render h1 with text ",()=>{
    expect(wrapper.find("h1").text()).toContain("This is counter app")
  })

  test("teste counter",()=>{
    wrapper = shallow(<App/>)
    expect(wrapper.find("#counter-value").text()).toBe("0")
  })
  
}) 