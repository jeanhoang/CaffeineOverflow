import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from 'react-router-dom';

test("testing if there are only 4 header links when not logged in", () => {
    render(<BrowserRouter><Header /></BrowserRouter>)
  
    const linkElements = screen.getAllByRole('link');
    expect(linkElements.length).toBe(4);
  })

  test("testing if the logo link is correct", () => {
    render(<BrowserRouter><Header /></BrowserRouter>)
  
    const linkElements = screen.getAllByRole('link');
    expect(linkElements[0].href.slice(-1)).toBe("/");
  })

  test("testing if the about link is correct", () => {
    render(<BrowserRouter><Header /></BrowserRouter>)
  
    const linkElements = screen.getAllByRole('link');
    expect(linkElements[1].href.slice(-6)).toBe("/about");
  })

  test("testing if the shopping link is correct", () => {
    render(<BrowserRouter><Header /></BrowserRouter>)
  
    const linkElements = screen.getAllByRole('link');
    expect(linkElements[2].href.slice(-9)).toBe("/shopping");
  })

  test("testing if the login link is correct", () => {
    render(<BrowserRouter><Header /></BrowserRouter>)
  
    const linkElements = screen.getAllByRole('link');
    expect(linkElements[3].href.slice(-5)).toBe("/auth");
  })