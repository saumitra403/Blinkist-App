import { render, screen } from "@testing-library/react";
import AvatarComponent from ".";
import { BrowserRouter} from "react-router-dom";
test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <AvatarComponent></AvatarComponent>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("box");
  expect(linkElement).toBeInTheDocument();
})