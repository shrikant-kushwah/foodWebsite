import {render, screen} from '@testing-library/react';
import Contact from "../Contact";
import '@testing-library/jest-dom';

 
describe("Contact Us Page Test Case", ()=>{

  // beforeAll(()=>{
  //   console.log("Before All");
  // })

  // beforeEach(()=>{
  //   console.log("Before Each");
  // })

  // afterAll(()=>{
  //   console.log("After All");
  // })

  // afterEach(()=>{
  //   console.log("After Each");
  // })


// you can write "test" or "it":-
  it("should load contact us component", ()=>{
    render(<Contact/>);
  
    const heading = screen.getByRole("heading");
  
    // Assertion
    expect(heading).toBeInTheDocument();
  });
  
  it("should load button inside Contact component", ()=>{
    render(<Contact/>);
  
    const button = screen.getByRole("button");
  
    // Assertion
    expect(button).toBeInTheDocument();
  });
  
  it("should load button inside Contact component", ()=>{
    render(<Contact/>);
  
    const button = screen.getByText("Submit");
  
    // Assertion
    expect(button).toBeInTheDocument();
  });
  
  it("should load input name inside Contact component", ()=>{
    render(<Contact/>);
  
    const inputName = screen.getByPlaceholderText("name");
  
    // Assertion
    expect(inputName).toBeInTheDocument();
  });
  
  it("should load 2 input boxes on the Contact component", ()=>{
    render(<Contact/>);
  
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
  
    // console.log(inputBoxes.length);
  
    // Assertion
    expect(inputBoxes.length).toBe(2);
    // Or
    // expect(inputBoxes.length).not.toBe(3);
    // Or
    // expect(inputBoxes.length).toBeTruthy();
  });

});
