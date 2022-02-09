import { render, screen } from "@testing-library/react";
import MyLibrary from ".";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
    const books = {};
    const setBooks = jest.fn();
    render(
      <BrowserRouter>
         <MyLibrary book={books} setBooks={setBooks}></MyLibrary>
      </BrowserRouter>
    );
    const linkElement = screen.getByText("My library");
    expect(linkElement).toBeInTheDocument();
});