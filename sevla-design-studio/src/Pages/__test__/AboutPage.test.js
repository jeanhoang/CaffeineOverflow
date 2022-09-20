import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import AboutPage from '../AboutPage';

describe('About Page Headers', () => {
  test('Renders Site Story Header', () => {
    //Arrange
    render(<AboutPage />);
    //Act
    //...
    //Assert
    const linkElement = screen.getByText("My Story");
    expect(linkElement).toBeInTheDocument();
  });

  test('Renders Follow Us Header', () => {
    //Arrange
    render(<AboutPage />);
    //Act
    //...
    //Assert
    const linkElement = screen.getByText("Follow Us");
    expect(linkElement).toBeInTheDocument();
  });
});
