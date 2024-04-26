import RestCards from "../RestCards";
import MOCK_DATA from "../mocks/RestCardMock.json";
//import RestCards from "../RestCards";

import {  render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

test("Rest cards should render cards ", () => {
render(<RestCards resData = {MOCK_DATA}/>) 
const name = screen.getByText("Domino's Pizza");

expect(name).toBeInTheDocument();


})