import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("should load Header component", () => {

  beforeAll(()=>{
    console.log("Before all");
  })

  beforeEach(()=>{
    console.log("before each")
  })

  it("Should render header component with login ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    // const loginButton = screen.getByText("Login");
    const loginButton = screen.getByRole("button", {name: "Login"})

    expect(loginButton).toBeInTheDocument();
  });
  it("Should render header component with cart items 0 ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    // const loginButton = screen.getByText("Login");
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
  });
  it("Should change from login to logout on click ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    // const loginButton = screen.getByText("Login");
    const loginButton = screen.getByRole("button", {name: "Login"});
      fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
  });
});
