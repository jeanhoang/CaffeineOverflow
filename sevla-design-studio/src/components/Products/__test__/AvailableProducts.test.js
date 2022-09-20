import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import React from 'react';

import AvailableProducts from '../AvailableProducts';

describe('Async product list', () => {
  // Verify the API calls load data (using async for delay in response)
  test('renders products if request succeeds', async () => {
    //Arrange
    render(<AvailableProducts />)
    //Act
    //...
    //Assert
    const element = screen.getByTestId('item-element')
    expect(element).toBeInTheDocument();
  });
});

