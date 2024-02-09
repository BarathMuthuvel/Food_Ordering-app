import { screen , render } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";


describe("ContactUs component test case", () => {
    it("should load contact us component", () => {
        render(<ContactUs />)
    
        //Querying
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    })
    
    it("should load button inside contact us component", () => {
        render(<ContactUs />)
    
        const button = screen.getByRole("button")
    
        expect(button).toBeInTheDocument()
    })
    
    it("Should load input field inside contact us component", () => {
        render(<ContactUs />)
    
        const inputField = screen.getByPlaceholderText("Name");
        expect(inputField).toBeInTheDocument()
    })
    
    it("Should load 2 input fields inside contact us component", () => {
        render(<ContactUs />)
    
        const inputBox = screen.getAllByRole("textbox");
    
        expect(inputBox).toHaveLength(2);
    })
})

