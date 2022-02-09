import { render, screen } from "@testing-library/react";
import BookInfo from ".";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
    const books = {};
    const setBooks = jest.fn();
    render(
      <BrowserRouter>
        <BookInfo books={books} setBooks={setBooks}></BookInfo>
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Get The Key Ideas From");
    expect(linkElement).toBeInTheDocument();
});