import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "./mocks/resListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List form Biriyani", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

 const searchButton = screen.getByRole("button", {name: "Search"});

 const searchInput = screen.getByTestId("searchInput");

 fireEvent.change(searchInput, {target: {value: "Biriyani"}});

 fireEvent.click(searchButton);

 const resList =  screen.getAllByTestId("resCard");

 expect(resList.length).toBe(5);

});

it("Should Filter Res List form Biriyani", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
   const beforeFilter = screen.getByRole("button", {name: "Top Rated Restaurant"});  
  
   fireEvent.click(beforeFilter);
  
   const afterFilter =  screen.getAllByTestId("resCard");
  
   expect(afterFilter.length).toBe(20);
  
  });
