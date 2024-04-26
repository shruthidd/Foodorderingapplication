import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/SearchRest.json";
import { BrowserRouter } from "react-router-dom";
import RestCards from "../RestCards";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA); //runnning on jsdom only we can't fetch apis on globally
    },
  });
});

test("should search rescards for burger and how many cards before and after search  ---- full test for search event ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const serchbefore = screen.getAllByTestId("restcard");
  expect(serchbefore.length).toBe(20);
  const searchbutton = screen.getByRole("button", { name: "search" });

  // console.log(searchbutton);

  expect(searchbutton).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");
  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchbutton);

  const cards = screen.getAllByTestId("restcard");
  expect(cards.length).toBe(2);
});


/// TOP RATED RESTAURANT TESTCASE

test("should FILTER FOR TOP RATED RESTAU ", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          {" "}
          <Body />
        </BrowserRouter>
      )
    );


    const serchfilter = screen.getAllByTestId("restcard");
    expect(serchfilter.length).toBe(20);


    const button = screen.getByRole("button", {name: "Top Rated Restaurant"})

    expect(button).toBeInTheDocument();

    
    fireEvent.click(button);
  
    const cards = screen.getAllByTestId("restcard");
    expect(cards.length).toBe(19);
  });