import { render, screen } from "@testing-library/react";
import LandingPage from ".";
import { BrowserRouter } from "react-router-dom";

const router = (books: any, setBooks: any) => {
  return (
    <BrowserRouter>
      <LandingPage books={books} setBooks={setBooks}></LandingPage>
    </BrowserRouter>
  );
};

const setBooks = jest.fn();
describe("Home", () => {
  let response, books: any;
  beforeAll(async () => {
    response = await fetch("http://localhost:3000/books");
    books = await response.json();
  });
  test("should render input", async () => {
    const tree = render(router(books, setBooks));
    await new Promise((r) => setTimeout(r, 2000));
    expect(tree).toMatchSnapshot();
  });
});
