import { render, screen } from "@testing-library/react";
import Logo from ".";
import { BrowserRouter} from "react-router-dom";
test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Logo></Logo>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("box");
  expect(linkElement).toBeInTheDocument();
})