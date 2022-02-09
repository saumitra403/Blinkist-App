import { render, screen } from "@testing-library/react";
import Tabs from ".";
import { BrowserRouter} from "react-router-dom";
test("renders learn react link", () => {
  const tabData = {}
  render(
    <BrowserRouter>
      <Tabs tabData={tabData}></Tabs>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("tabs");
  expect(linkElement).toBeInTheDocument();
})