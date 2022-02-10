import { render, screen } from "@testing-library/react";
import Typography from ".";
import { BrowserRouter} from "react-router-dom";
test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Typography></Typography>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("typo");
  expect(linkElement).toBeInTheDocument();
})