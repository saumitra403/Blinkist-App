import { render, screen } from "@testing-library/react";
import Template from ".";
import { BrowserRouter} from "react-router-dom";
test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Template></Template>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("box");
  expect(linkElement).toBeInTheDocument();
})