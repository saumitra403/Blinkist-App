import { render, screen } from "@testing-library/react";
import Card from ".";
import { BrowserRouter } from "react-router-dom";
const handleClick = jest.fn();
test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Card
        src="/Assets/6.png"
        bookname="Loving Your Business"
        author="Debbie King"
        status="Reading"
        id="5"
        handleClick={handleClick}
      ></Card>
    </BrowserRouter>
  );
  const linkElement = screen.getByText("Debbie King");
  expect(linkElement).toBeInTheDocument();
});
