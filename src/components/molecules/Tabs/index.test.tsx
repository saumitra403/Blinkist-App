import { render, screen } from "@testing-library/react";
import Tabs from ".";
import { BrowserRouter} from "react-router-dom";
test("renders learn react link", () => {
  const value = 10;
  const setValue = jest.fn();
  const handleChange = jest.fn();
  render(
    <BrowserRouter>
      <Tabs value={value} onChange={handleChange}></Tabs>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("tabs");
  expect(linkElement).toBeInTheDocument();
})