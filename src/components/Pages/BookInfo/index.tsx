import { Box } from "@material-ui/core";
import { useParams } from "react-router-dom";
import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icons";
import AccessTimeIcon from "@mui/icons-material/AccessTimeOutlined";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Tabs from "../../molecules/Tabs";
import { useState } from "react";
import Img from "../../atoms/Images";
type bookType = {
  id: number,
  bookname: string,
  src: string,
  author: string,
  status: string,
  category: string,
  progress: number
}

type BookInfoProps = {
  books: Array<bookType>,
  setBooks: Function,
}
const BookInfo = (props: BookInfoProps) => {
  const {books, setBooks} = props
  const tabData = [
    {
      value: 0,
      label: "Synopsis",
    },
    {
      value: 1,
      label: "Who's it for?",
    },
    {
      value: 2,
      label: "About the Author",
    },
  ];
  const [value, setValue] = useState(0);
  const handleClick = (val: number) => {
    setValue(0);
  };
  let { bookId = 0 }:any = useParams();

  //console.log(books,bookId,books[bookId!]);
  let currData = books[bookId];
  const handleClickFinished = async () => {
    //put request
    let index = bookId;
    currData.status = "Finished";
    currData.progress = 100;
    const book = books.filter((curr: bookType) => {
      return curr.id != index;
    });
    book.splice(index, 0, currData);
    setBooks(book);

    await fetch(`https://jsonserver-saumitra.herokuapp.com/books/${index}`, {
      method: "PUT",
      body: JSON.stringify(currData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "895px",
        width: "100%",
        marginTop: "86px",
      }}
    >
      <Box sx={{ height: "inherit", width: "inherit" }}>
        <Typography
          variant="body2"
          sx={{ position: "absolute", top: "146px", left: "200px" }}
        >
          Get The Key Ideas From
        </Typography>
        <Typography
          variant="h1"
          sx={{ position: "absolute", top: "206px", left: "200px" }}
        >
          {currData.bookname}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ position: "absolute", top: "275px", left: "200px" }}
        >
          Turning Your Business into an Enduring Great Company
        </Typography>
        <Typography
          sx={{ position: "absolute", top: "324px", left: "200px" }}
        >{`by ${currData.author}`}</Typography>
        <Typography
          variant="caption"
          sx={{ position: "absolute", top: "363px", left: "200px" }}
        >
          15 minute-read
        </Typography>
        <Icon
          Icons={
            <AccessTimeIcon
              sx={{ position: "absolute", top: "362px", left: "290px" }}
            ></AccessTimeIcon>
          }
        ></Icon>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            position: "absolute",
            top: "464px",
            left: "200px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#22C870",
              fontSize: "16px",
              border: "1px solid #042330 !important",
              width: "fit-content",
              height: "44px",
            }}
          >
            Read Now
          </Button>
          {currData.status === "Reading" && (
            <Button
              variant="contained"
              sx={{
                background: "#2CE080",
                height: "44px",
                color: "#03314B",
                marginLeft: "21px",
              }}
              onClick={handleClickFinished}
            >
              Finished Reading
            </Button>
          )}
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon></ArrowForwardIcon>}
            sx={{
              color: "#6D787E",
              fontSize: "16px",
              height: "20px",
              width: "fit-content",
              marginTop: "12px",
              marginLeft: "31.5px",
            }}
          >
            Send To Kindle
          </Button>
        </Box>
        <Box sx={{ position: "absolute", top: "568px", left: "200px" }}>
          <Tabs tabData={tabData} stateHandler={handleClick}></Tabs>
          <Box>
            {value == 0 ? (
              <Typography
                variant="body2"
                sx={{ width: "600px" }}
              >{`Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Laziers essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to todays business world.`}</Typography>
            ) : (
              <Box sx={{ display: "none" }}></Box>
            )}
          </Box>
        </Box>
        <Box sx={{ position: "absolute", top: "206px", left: "808px" }}>
          <Img src={currData.src} width="304px" height="304px"></Img>
        </Box>
      </Box>
    </Box>
  );
};

export default BookInfo;
