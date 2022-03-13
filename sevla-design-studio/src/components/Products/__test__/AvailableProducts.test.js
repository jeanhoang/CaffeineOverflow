import { render, screen } from "@testing-library/react";
import AvailableProducts from "../AvailableProducts";

test('render the correct number of product headings', () => {
    render(<AvailableProducts/>)
    const headerElements = screen.getAllByRole('heading');
    expect(headerElements.length).toBe(4);

    //screen.debug();
})
 
test('render the correct number of input fields', () => {
    render(<AvailableProducts/>)
    const inputElements = screen.getAllByRole('spinbutton');
    expect(inputElements.length).toBe(4);
})

test('render the correct number of "+ Add" buttons', () => {
    render(<AvailableProducts/>)
    const buttonElements = screen.getAllByRole('button', {name: "+ Add"});
    expect(buttonElements.length).toBe(4);
})