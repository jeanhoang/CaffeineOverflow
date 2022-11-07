import { render, screen } from "@testing-library/react";
import Footer from "../Footer";


test("testing if the footer has the 3 social media links", () => {
  render(<Footer />)

  const linkElements = screen.getAllByRole('link');
  expect(linkElements.length).toBe(3);
})

test("testing if the first social media link is correct", () => {
    render(<Footer />)
  
    const linkElements = screen.getAllByRole('link');
    expect(linkElements[0].href).toBe("https://www.instagram.com/sevla.studios/");
  })

  test("testing if the second social media link is correct", () => {
    render(<Footer />)
  
    const linkElements = screen.getAllByRole('link');
    expect(linkElements[1].href).toBe("https://www.facebook.com/Sevla.Studio");
  })

  test("testing if the third social media link is correct", () => {
    render(<Footer />)
  
    const linkElements = screen.getAllByRole('link');
    expect(linkElements[2].href).toBe("https://www.etsy.com/ca/shop/SevlaStudio");
  })
