import { render, screen } from "@testing-library/react";
import Input from "../Input";

test('input element should be rendered', () => {
    render(<Input 
        label="Amount" input={{
        id: 'amount_' + 4,
        type: 'number',
        min: '0',
        max: '20',
        step: '1',
        defaultValue: '1',
      }}/>);
    const inputElement = screen.getByRole('spinbutton');
    expect(inputElement).toBeTruthy();
})

test('label text should be "Amount"', () => {
    render(<Input 
        label="Amount" input={{
        id: 'amount_' + 4,
        type: 'number',
        min: '0',
        max: '20',
        step: '1',
        defaultValue: '1',
      }}/>);
    const labelElement = screen.getByLabelText('Amount');
    expect(labelElement).toBeTruthy();
})