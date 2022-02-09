import { render, screen } from "@testing-library/react";
import LandingPage from ".";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
    const books = {};
    const setBooks = jest.fn();
    render(
      <BrowserRouter>
        <LandingPage books={books} setBooks={setBooks}></LandingPage>
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Get The Key Ideas From");
    expect(linkElement).toBeInTheDocument();
});