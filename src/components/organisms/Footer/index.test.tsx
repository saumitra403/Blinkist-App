import { render, screen } from "@testing-library/react";
import Footer from ".";
import { BrowserRouter} from "react-router-dom";
test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Footer></Footer>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("footer");
  expect(linkElement).toBeInTheDocument();
})