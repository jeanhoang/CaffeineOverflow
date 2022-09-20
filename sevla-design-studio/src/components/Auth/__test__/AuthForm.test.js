import React, { Component } from 'react';

import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import AuthForm from '../AuthForm';

configure({ adapter: new Adapter() });

describe(AuthForm, () => {

    //Make sure AuthForm component renders 
    it("renders AuthForm", () => {
        const wrapper = shallow(<AuthForm />)
    })

})
