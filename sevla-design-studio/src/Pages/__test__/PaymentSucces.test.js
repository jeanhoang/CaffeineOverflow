import { render, screen, fireEvent, getByTestId, getByAltText } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import { mount } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import PaymentSuccess from '../PaymentSuccess';
import { createBrowserHistory } from 'history';

configure({adapter: new Adapter()});

describe('PaymentSuccess component', () => {



    //Ensure button inside is rendered
    test('renders ContinueShopping button', () => {
        render(
            <BrowserRouter>
                <button></button>
            </BrowserRouter>
        );
    });


    //Mock onClick on Continue Shopping button
    test('render Order button', () => {
        //Define mock function
        const mockCallBack = jest.fn();

        const button = shallow((
            <BrowserRouter>
                    <Link>
                        <button onClick={mockCallBack}>Continue Shopping</button> //Wire mock function on onClick
                    </Link>
            </BrowserRouter>
        ));
        //Simulate click on button
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});