import React from 'react';
import {LoginPage} from "../../components/login-page";
import {shallow} from "enzyme/build/index";

test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage startLogin={() =>{}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toBeCalled();
});
