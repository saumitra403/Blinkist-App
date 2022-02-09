import { render, screen } from "@testing-library/react";
import Img from ".";
import { BrowserRouter} from "react-router-dom";
test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Img src="/Assets/1.jpg"></Img>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("img");
  expect(linkElement).toBeInTheDocument();
})