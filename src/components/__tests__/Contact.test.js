
//UNIT TESTING

import Contact from "../Contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

describe( "Contact Page", () => {
    test("should heading component rendered ", () => {
             
        render(<Contact/>)
    
       const heading = screen.getByRole("heading")
       expect(heading).toBeInTheDocument();
    
    })
    
    test("should button component rendered ", () => {
                 
        render(<Contact/>)
    
       const button = screen.getByRole("button")
       expect(button).toBeInTheDocument();
    
    })
    
    test("should input component rendered ", () => {
                 
        render(<Contact/>)
    
       const input = screen.getByPlaceholderText("name")
       expect(input).toBeInTheDocument();
    
    })
    
    test("should load 2 input boxes component rendered ", () => {
                 
        render(<Contact/>)
       //querying
       const input = screen.getAllByRole("textbox")
    
       //assertion
      expect(input[0]).toBeInTheDocument();
    
      //or
      //expect(input.length).toBe(2);
    
    })
})

