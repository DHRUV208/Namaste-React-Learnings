import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page Test Case", () => {
  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

//   test("should load contact us component", () => {
//     // render(<Contact />);
//     const button = screen.getByRole("button");

//     expect(button).toBeInTheDocument();
//   });

  test("should load input name inside contact", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("should load two input boxes on the Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    console.log("inputBoxes", inputBoxes);
    expect(inputBoxes.length).toBe(2);
  });
});
