import { logRoles, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    render(<App />)
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
      });
    expect(topLevelHeading).toBeInTheDocument()
});

test('displays an image with alt text identifying the image', () => {
    render(<App />)
    const image = screen.getByAltText('Profile image of Jojo')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://tinyurl.com/4ckdcbcp')
})

test('displays a second-level heading with the text "about me"', () => {
    render(<App />)
    const secondLevelHeading = screen.getByRole('heading', {
        name: /about me/i
    })
    expect(secondLevelHeading).toBeInTheDocument()
})

test('displays a paragraph with biography text', () => {
    render(<App />)
    const paragraph = screen.getByRole('bio')
    expect(paragraph).toBeInTheDocument()
})

test('displays two links: one to a GitHub profile and one to a LinkedIn profile', () => {
    render(<App />)
    const [link1, link2] = screen.getAllByRole('link')
    expect(link1).toBeInTheDocument()
    expect(link1).toHaveAttribute('href', 'github-link')
    expect(link2).toBeInTheDocument()
    expect(link2).toHaveAttribute('href', 'linkedin-link')
})