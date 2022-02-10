import { render, screen } from "@testing-library/react";
import Template from ".";
import { BrowserRouter} from "react-router-dom";
test("renders learn react link", async () => {
  render(
    <BrowserRouter>
      <Template></Template>
    </BrowserRouter>
  );
  await new Promise((r) => setTimeout(r, 2000));
  const linkElement = screen.getByTestId("box");
  expect(linkElement).toBeInTheDocument();
})

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Template></Template>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("circular");
  expect(linkElement).toBeInTheDocument();
})

jest.setTimeout(30000);