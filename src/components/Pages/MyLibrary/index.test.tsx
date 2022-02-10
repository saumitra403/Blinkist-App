import { render, screen } from "@testing-library/react";
import MyLibrary from ".";
import { BrowserRouter } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
const router = (books: any, setBooks: any) => {
  return (
    <BrowserRouter>
      <MyLibrary books={books} setBooks={setBooks}></MyLibrary>
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
  /*
  test("should render input", async () => {
    const tree = render(router(books, setBooks));
    await new Promise((r) => setTimeout(r, 2000));
    expect(tree).toMatchSnapshot();
  });
  */
  test('should render same no of finished books',async () => {
    render(router(books, setBooks));
    const tabsElement = screen.getByTestId(/tab-0/);
    fireEvent.click(tabsElement);
    const progressBarElement = await screen.findAllByRole('progressbar');
    const filterData = books.filter((currBook: any) => {
      return currBook.status==="Reading"
    })
    expect(progressBarElement.length).toBe(filterData.length);
  });

  test('should render same no of currently books',async () => {
    render(router(books, setBooks));
    const tabsElement = screen.getByTestId(/tab-1/);
    fireEvent.click(tabsElement);
    const progressBarElement = await screen.findAllByRole('progressbar');
    const filterData = books.filter((currBook: any) => {
      return currBook.status==="Finished"
    })
    expect(progressBarElement.length).toBe(filterData.length);
  });
});

