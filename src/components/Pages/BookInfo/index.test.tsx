import { render, screen } from "@testing-library/react";
import BookInfo from ".";
import { BrowserRouter } from "react-router-dom";
let response, books: any;
beforeAll(async () => {
  response = await fetch("http://localhost:3000/books");
  books = await response.json();
});
const setBooks = jest.fn();
test("renders learn react link", async () => {
  await new Promise((r) => setTimeout(r, 2000));
  console.log(books[0].bookname)
  render(
      <BookInfo books={books} setBooks={setBooks} id={0}></BookInfo>
  );
  const linkElement = screen.getByText("Get The Key Ideas From");
  expect(linkElement).toBeInTheDocument();
});
jest.setTimeout(30000);