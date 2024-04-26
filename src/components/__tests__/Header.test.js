import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// bcz its redux so add provider

test(" it should a ", () => {
    render(
        <BrowserRouter>   
        <Provider store={appStore}>                   
          <Header />
        </Provider>
      </BrowserRouter> );
  

  const loginbutton =  screen.getByRole("button", {name: "login"});
   expect(loginbutton).toBeInTheDocument();
});


test(" it should a ", () => {
    render(
        <BrowserRouter>   
        <Provider store={appStore}>                   
          <Header />
        </Provider>
      </BrowserRouter> );
  

  const loginbutton =  screen.getByText("Cart - (0items)");
   expect(loginbutton).toBeInTheDocument();
});

test(" it should a ", () => {
    render(
        <BrowserRouter>   
        <Provider store={appStore}>                   
          <Header />
        </Provider>
      </BrowserRouter> );
  

  const loginbutton =  screen.getByText(/Cart/);          //rejex /cart/
   expect(loginbutton).toBeInTheDocument();
});

test(" it should a ", () => {
    render(
        <BrowserRouter>   
        <Provider store={appStore}>                   
          <Header />
        </Provider>
      </BrowserRouter> );
  

  const loginbutton =  screen.getByRole("button", {name: "login"});
  fireEvent.click(loginbutton);

  const logoutbutton =  screen.getByRole("button", {name: "logout"});
   expect(logoutbutton).toBeInTheDocument();
});



