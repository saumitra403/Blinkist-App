import { render, screen } from "@testing-library/react";
import BookInfo from ".";
import { BrowserRouter } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
let response, books: any;
const router = (books: any, setBooks: any, id: any) => {
  return (
    <BrowserRouter>
      <BookInfo books={books} setBooks={setBooks} id={id}></BookInfo>
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
    const tree = render(router(books, setBooks,1));
    await new Promise((r) => setTimeout(r, 2000));
    expect(tree).toMatchSnapshot();
  });
  test("should render selected tab 0", async () => {
    render(router(books, setBooks,1));
    await new Promise((r) => setTimeout(r, 2000));
    const tabsElement = screen.getByTestId(/tab-0/);
    fireEvent.click(tabsElement);
    expect(tabsElement).toHaveStyle("color:#2CE080");
  });
  test("should render tab 1", async () => {
    render(router(books, setBooks,1));
    await new Promise((r) => setTimeout(r, 2000));
    const tabsElement = screen.getByTestId(/tab-1/);
    fireEvent.click(tabsElement);
    // const progressBarElement = await screen.getByText(
    //   "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Laziers essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to todays business world."
    // );
    expect(tabsElement).toHaveStyle("color:#2CE080");
  });

  test("should render tab 2", async () => {
    render(router(books, setBooks,1));
    await new Promise((r) => setTimeout(r, 2000));
    const tabsElement = screen.getByTestId(/tab-2/);
    fireEvent.click(tabsElement);
    // const progressBarElement = await screen.getByText(
    //   "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Laziers essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to todays business world."
    // );
    expect(tabsElement).toHaveStyle("color:#2CE080");
  });

  test("Finished Reading Button Should not Be Displayed", async () => {
    render(router(books, setBooks,2));
    await new Promise((r) => setTimeout(r, 2000));
    const buttonElement = screen.queryByText("Finished Reading");
    expect(buttonElement).not.toBeInTheDocument();
  })

  test("Finished Reading Button Should not Be Displayed", async () => {
    render(router(books, setBooks,7));
    await new Promise((r) => setTimeout(r, 2000));
    const buttonElement = screen.queryByText("Finished Reading");
    expect(buttonElement).not.toBeInTheDocument();
  })
  
  test("Button is Clickable and state must be changed", async () => {
    render(router(books, setBooks,1));
    await new Promise((r) => setTimeout(r, 2000));
    const buttonElement = screen.getByText("Finished Reading");
    fireEvent.click(buttonElement);
    expect(buttonElement).not.toBeInTheDocument();
  })

});


//1(Reading),2(Finished),7(Null)