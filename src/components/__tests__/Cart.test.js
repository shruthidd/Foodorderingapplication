//mport {  render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/MenuList.json";
import { act } from "react-dom/test-utils";
import RestMenu from "../RestMenu";
//import ItemList from "../ItemList";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "../Header";
import Cart from "../Cart"
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA); //runnning on jsdom only we can't fetch apis on globally
      },
    });
  });

  test(" full test for search event ", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
        <Provider store = {appStore}>
        <Header/>
        <RestMenu/>
        <Cart/>
        </Provider>
          </BrowserRouter>
      )
      )
    
      const restmenu = screen.getByText("Whopper (8)");
      fireEvent.click(restmenu);
      //const restmenus = screen.getAllByTestId("fooditems")
     // expect(restmenus.length).toBe();

     expect (screen.getAllByTestId("fooditems").length).toBe(8);

     const Addbtn = screen.getAllByRole("button", {name: "Add +"})

     fireEvent.click(Addbtn[0]);

     expect(screen.getByText("Cart - (1items)")).toBeInTheDocument();
     fireEvent.click(Addbtn[2]);
     expect(screen.getByText("Cart - (2items)")).toBeInTheDocument();
     fireEvent.click(Addbtn[3]);

     expect(screen.getAllByTestId("fooditems").length).toBe(11);
     fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));
     expect(screen.getAllByTestId("fooditems").length).toBe(8);

    expect( screen.getByText("cart is empty!!! Add your Favorite Items😋")).toBeInTheDocument();
     
    
    });