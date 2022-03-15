import { render, screen } from "@testing-library/react";
import HeaderCartButton from "../HeaderCartButton";

test("testing if the cart element is present", () => {
    render(<HeaderCartButton/>)

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeTruthy();

})