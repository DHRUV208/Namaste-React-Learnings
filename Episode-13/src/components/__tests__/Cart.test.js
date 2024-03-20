import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "./mocks/mockRestaurantMenu.json";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});
describe("should load the cart component", () => {
  it("should load restaurant menu component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
        </BrowserRouter>
      )
    );
  });

  const accordianHeader = screen.getByText("Thali (7)");
  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(7);

  const addBtns = screen.getAllByRole("button", {name: "Add +" });
  fireEvent.click(addBtns[0]);


  expect(screen.getByText("Cart (1 items )")).toBeInTheDocument();

  expect(foodItems.length).toBe(8);

  fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}))
  expect(foodItems.length).toBe(7);

  expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument();


  
});
