import Banner from "../../molecules/Banner";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import SearchBar from "../../molecules/SearchBar";
import Card from "../../organisms/Card";
import Typography from "../../atoms/Typography/index";
const useStyle = makeStyles({});

const LandingPage = ({ books, setBooks }: any) => {
  const handleClick = async (id: any) => {
    //put request
    let index = books.findIndex((currBook: any) => currBook.id === id);
    let currData = books[index];
    currData.status = "Reading";
    currData.progress = 0;
    const book = books.filter((curr: any) => {
      return curr.id!=index;
    })
    book.splice(index,0,currData);
    setBooks(book)

    await fetch(`http://localhost:3000/books/${index}`, {
      method: "PUT",
      body: JSON.stringify(currData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const classes = useStyle();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      data-testid="box"
    >
      <Banner></Banner>

      <Box sx={{ marginTop: "58px", width: "912px" }}>
        <SearchBar></SearchBar>
        <Typography variant="h3" sx={{ position: "absolute", top: "566px" }}>
          Trending Blinks
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            width: "inherit",
          }}
        >
          {books && books.map((curr: any) => {
            let currData = books[curr.id];
            return (
              <Card
                imgsrc={currData.src}
                bookname={currData.bookname}
                author={currData.author}
                status={currData.status}
                id={currData.id}
                handleClick={handleClick}
                key={currData.id}
                data-testid={`bookcard-${currData.id}`}
              ></Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
