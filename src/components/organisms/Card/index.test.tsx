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

test("Render Add To Library on null status", () => {
  render(
    <BrowserRouter>
      <Card
        src="/Assets/8.png"
        bookname="Eat Better, Feel Better"
        author="Giada De Laurentiis"
        status="Null"
        id="7"
        handleClick={handleClick}
      ></Card>
    </BrowserRouter>
  )
    const linkElement = screen.getByText("Add To Library");
    expect(linkElement).toBeInTheDocument();
});

test("Render Progress Bar on Reading Status", () => {
  render(
    <BrowserRouter>
      <Card
        src="/Assets/8.png"
        bookname="The Lonely Century"
        author="Noreena Hertz"
        status="Reading"
        id="6"
        handleClick={handleClick}
      ></Card>
    </BrowserRouter>
  )
  const linkElement = screen.getByTestId("button");
  expect(linkElement).toBeInTheDocument();
})
