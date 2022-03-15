import { render, screen } from "@testing-library/react";
import App from "../../App";

test("testing if the cart element is present", () => {
    render(<App/>)

    const cartButtonElement = screen.getByRole('button', {name: /Your Cart 0/i});
    expect(cartButtonElement).toBeTruthy();
})

test("testing if clicking on the Add Item button increases the amount of items displayed in the header cart element", () => {
    render(<App/>)

    const addButtons = screen.getAllByRole('button', {name: /\+ Add/i});
    const addButton = addButtons[0];
    addButton.click();

    const cartButtonElement = screen.getByRole('button', {name: /Your Cart 1/i});

    expect(cartButtonElement).toBeTruthy();
})