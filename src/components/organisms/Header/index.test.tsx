import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";
import { BrowserRouter} from "react-router-dom";
test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("header");
  expect(linkElement).toBeInTheDocument();
});
