import { render, screen } from "@testing-library/react";
import Banner from ".";
import { BrowserRouter} from "react-router-dom";
test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Banner></Banner>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("banner");
  expect(linkElement).toBeInTheDocument();
})