import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("test login", () => {
  render(<App />);
  test("when login page is mounted", () => {
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test("must have a form with the following fields: email, password, remember and a login button", () => {
    render(<App />);
    const buttonLogin = screen.getByText('Login')
    const checkbox = screen.getByText('Remember')
    const inputEmail = screen.getByPlaceholderText('Email')
    const inputPasword = screen.getByPlaceholderText('Password')

    userEvent.click(checkbox);

    expect(checkbox).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPasword).toBeInTheDocument();
    expect(buttonLogin).toHaveTextContent('Login')

  });
});
