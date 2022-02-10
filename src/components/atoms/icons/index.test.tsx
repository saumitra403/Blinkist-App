import { render, screen } from "@testing-library/react";
import Icon from ".";
import { BrowserRouter} from "react-router-dom";
import { MoreHoriz } from "@mui/icons-material";
test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Icon Icons={<MoreHoriz></MoreHoriz>}></Icon>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("box");
  expect(linkElement).toBeInTheDocument();
})