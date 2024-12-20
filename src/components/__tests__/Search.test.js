import { fireEvent, render, screen } from "@testing-library/react";
import Body from '../Body';
import MOCK_DATA from '../mocks/mockReasListData.json';
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';




global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// Should render the body component with Search
// Should Search res list for pizza text input
 
it("Should filter Top Rated Restaurant", async () => {
  await act(async () => render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ));

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(9);

  const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(9);

  // const searchBtn = screen.getByRole("button",{name:"Search"});
  // // console.log(searchBtn);

  // const searchInput = screen.getByTestId("searchInput");
  // // console.log(searchInput);

  // fireEvent.change(searchInput, {target:{value:"pizza"}});

  // fireEvent.click(searchBtn);

  // // screen should load 4 re cards
  // const cardsAfterSearch = screen.getAllByTestId("resCard");

  // // expect(searchBtn).toBeInTheDocument();

  // expect(cardsAfterSearch.length).toBe(2)

});