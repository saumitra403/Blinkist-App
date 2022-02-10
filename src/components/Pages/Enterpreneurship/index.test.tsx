import { render, screen } from "@testing-library/react";
import LandingPage from ".";
import { BrowserRouter } from "react-router-dom";
let response, books: any;
beforeAll(async () => {
  response = await fetch("http://localhost:3000/books");
  books = await response.json();
  await new Promise((r) => setTimeout(r, 2000));
});
const setBooks = jest.fn();
test("renders learn react link", async () => {
    console.log(books);
    render(
      <BrowserRouter>
        <LandingPage books={books} setBooks={setBooks}></LandingPage>
      </BrowserRouter>
    );
    await new Promise((r) => setTimeout(r, 5000));
    const linkElement = screen.queryAllByTestId("card");
    expect(linkElement.length).toBe(11);
});
jest.setTimeout(30000);

