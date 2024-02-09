import MOCK_DATA from "././mocks/resMenuMock.json";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load Restaurant Menu Component", async () => {
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

  const accordionHeader = screen.getByText("Noodles (5)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("menuList").length).toBe(5);

  const addButton = screen.getAllByRole("button", {name: "Add +"})
  fireEvent.click(addButton[0]);

  expect(screen.getByText("Cart - (1)")).toBeInTheDocument();

  fireEvent.click(addButton[1]);

  expect(screen.getByText("Cart - (2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("menuList").length).toBe(7);

});
