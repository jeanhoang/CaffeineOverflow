import { render, screen } from "@testing-library/react";
import Input from "../Input";

//testing the inputs with custom props, NOT the actual props to be sent

test('input element should be rendered', () => {
    render(<Input 
        label="Amount" input={{
        id: 'amount_' + 4,
        type: 'number',
        min: '1',
        max: '10',
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
        min: '1',
        max: '10',
        step: '1',
        defaultValue: '1',
      }}/>);
    const labelElement = screen.getByLabelText('Amount');
    expect(labelElement).toBeTruthy();
})

test('input value should start at "1"', () => {
  render(<Input 
      label="Amount" input={{
      id: 'amount_' + 4,
      type: 'number',
      min: '1',
      max: '10',
      step: '1',
      defaultValue: '1',
    }}/>);
    const inputElement = screen.getByRole('spinbutton');
    expect(inputElement.value).toBe("1");
})

test('testing that the step value for the input is 1 and not 0.1 like the default', () => {
  render(<Input 
      label="Amount" input={{
      id: 'amount_' + 4,
      type: 'number',
      min: '1',
      max: '10',
      step: '1',
      defaultValue: '1',
    }}/>);
    const inputElement = screen.getByRole('spinbutton');
    inputElement.stepUp();
    expect(inputElement.value).toBe("2");
})

test("testing that after stepping down the value doesn't change since 1 is the starting value and 1 is the minimum", () => {
  render(<Input 
      label="Amount" input={{
      id: 'amount_' + 4,
      type: 'number',
      min: '1',
      max: '10',
      step: '1',
      defaultValue: '1',
    }}/>);
    const inputElement = screen.getByRole('spinbutton');
    inputElement.stepDown();
    expect(inputElement.value).toBe("1");
})

test("testing that the input will stay at the maximum of 10 even after stepping up the value between 10 and 100 times", () => {
  render(<Input 
      label="Amount" input={{
      id: 'amount_' + 4,
      type: 'number',
      min: '1',
      max: '10',
      step: '1',
      defaultValue: '1',
    }}/>);
    const inputElement = screen.getByRole('spinbutton');
    for (let i = 0; i < Math.floor(Math.random() * 100) + 10; i++) {
      inputElement.stepUp();
  }
  expect(inputElement.value).toBe("10");
})