import React, { Component } from 'react';

import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import AuthForm from './AuthForm';

describe(AuthForm, () => {

    //Make sure AuthForm component renders 
    it("renders AuthForm", () => {
        const wrapper = shallow (<AuthForm/>)
    })

})
