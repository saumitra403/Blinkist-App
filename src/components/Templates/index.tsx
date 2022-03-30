import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { Box } from "@material-ui/core";
import LandingPage from "../Pages/Enterpreneurship";
import { makeStyles } from "@material-ui/styles";
import MyLibrary from "../Pages/MyLibrary";
import BookInfo from "../Pages/BookInfo";


const Template = () => {
  const [books, setBooks] = useState<any>(null);
  console.log(typeof setBooks);
  useEffect(() => {
    const processor = async () => {
      let res = await fetch("https://jsonserver-saumitra.herokuapp.com/books");
      let cards = await res.json();
      setBooks(cards);
    };
    processor();
  }, []);

  return !books ? (
    <div data-testid="circular"></div>
  ) : (
    <Box
      sx={{ position: "relative", minHeight: "100%", marginBottom: "-370px" }}
      data-testid="box"
    >
      <Router>
        <Header></Header>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage books={books} setBooks={setBooks}></LandingPage>
              }
            ></Route>
            <Route
              path="/library"
              element={
                <MyLibrary books={books} setBooks={setBooks}></MyLibrary>
              }
            ></Route>
            <Route
              path="book-info/:bookId"
              element={<BookInfo books={books} setBooks={setBooks}></BookInfo>}
            ></Route>
          </Routes>
        </Box>
        <Box sx={{height: "370px"}}><Footer></Footer></Box>
      </Router>
    </Box>
  );
};

export default Template;
