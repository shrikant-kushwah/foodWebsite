import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from '../../utils/appStore';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';


it("Should load render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button",{name:"Login"});
  // const loginButton = screen.getByText("Login");

  // Assertion 
  expect(loginButton).toBeInTheDocument();
});


it("Should render Header Component with a Cart Items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText("Cart - (0 items)");

  // Assertion 
  expect(loginButton).toBeInTheDocument();
});


it("Should render Header Component with a Cart Item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
// it's a rejax => /Cart/
  const loginButton = screen.getByText(/Cart/);

  // Assertion 
  expect(loginButton).toBeInTheDocument();
});

// Every test case has an isolated test case,right? Isolated render, isolated fetch.

it("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button",{name:"Login"});

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button",{name:"Logout"});

  // Assertion 
  expect(logoutButton).toBeInTheDocument();
});