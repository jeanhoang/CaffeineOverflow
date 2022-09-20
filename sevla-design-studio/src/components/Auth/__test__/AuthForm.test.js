import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AuthForm from '../AuthForm';

configure({ adapter: new Adapter() });

describe(AuthForm, () => {

    // Verify the AuthForm component renders 
    it("Renders AuthForm", () => {
        const wrapper = shallow(<AuthForm />)
    })

    // Verify the correct state renders 
    test('Renders login page on load', () => {
        //Arrange
        render(<AuthForm />);
        //Act
        //...
        //Assert
        const buttonElement = screen.getByText("Create new account");
        expect(buttonElement).toBeInTheDocument();
    })

    // Verify the state updates correctly
    test('Renders register user page on button click', () => {
        //Arrange
        render(<AuthForm />);
        //Act
        const buttonElement = screen.getByText("Create new account");
        userEvent.click(buttonElement);
        //Assert
        const buttonText = screen.getByText("Login with existing account");
        expect(buttonText).toBeInTheDocument();
    })

})

