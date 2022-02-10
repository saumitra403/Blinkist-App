import { render, screen } from "@testing-library/react";
import Button from ".";
import { BrowserRouter} from "react-router-dom";
test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Button></Button>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("box");
  expect(linkElement).toBeInTheDocument();
})