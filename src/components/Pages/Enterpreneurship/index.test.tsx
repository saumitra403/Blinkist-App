import { render, screen } from "@testing-library/react";
import LandingPage from ".";
import { BrowserRouter } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
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
    response = await fetch("https://jsonserver-saumitra.herokuapp.com/books");
    books = await response.json();
  });
  test("should render input", async () => {
    const tree = render(router(books, setBooks));
    await new Promise((r) => setTimeout(r, 2000));
    expect(tree).toMatchSnapshot();
  });
  test("test Cards", async () => {
    const tree = render(router(books, setBooks));
    await new Promise((r) => setTimeout(r, 2000));
    //const cards = tree.queryAllByTestId(/bookcard-/);
    const linkElement = await screen.findAllByTestId("card-library-handler");
    fireEvent.click(linkElement[0]);
    //expect(cards as HTMLElement[]).toBeTruthy();

  });
});
