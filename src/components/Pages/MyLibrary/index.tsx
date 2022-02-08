import { Box } from "@material-ui/core";
import { useState } from "react";
import Tabs from "../../molecules/Tabs";
import Card from "../../organisms/Card";
import Typography from "../../atoms/Typography";
const MyLibrary = ({ books, setBooks }: any) => {
  const tabData = [
    {
      value: 0,
      label: "Currently reading",
    },
    {
      value: 1,
      label: "Finished",
    },
  ];
  const [value, setValue] = useState(0);

  const handleClick = (val: any) => {
    setValue(val);
  };

  const handleClickLib = async (id: any) => {
    //put request
    let index = books.findIndex((currBook: any) => currBook.id === id);
    let currData = books[index];
    currData.status = "Reading";
    currData.progress = 0;
    const book = books.filter((curr: any) => {
      return curr.id != index;
    });
    book.splice(index, 0, currData);
    setBooks(book);

    let res = await fetch(`http://localhost:3000/books/${index}`, {
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
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1" sx={{ position: "absolute", top: "145px" }}>
        My library
      </Typography>
      <Box sx={{ marginTop: "250px", width: "912px" }}>
        <Tabs tabData={tabData} stateHandler={handleClick}></Tabs>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            width: "inherit",
            marginTop: "25px",
          }}
        >
          {value === 0
            ? books.map((curr: any) => {
                let currData = books[curr.id];
                if (currData.status === "Reading") {
                  return (
                    <Card
                      imgsrc={currData.src}
                      bookname={currData.bookname}
                      author={currData.author}
                      status={currData.status}
                      id={currData.id}
                      handleClick={handleClickLib}
                      key={currData.id}
                    ></Card>
                  );
                }
              })
            : books.map((curr: any) => {
                let currData = books[curr.id];
                if (currData.status === "Finished") {
                  return (
                    <Card
                      imgsrc={currData.src}
                      bookname={currData.bookname}
                      author={currData.author}
                      status={currData.status}
                      id={currData.id}
                      handleClick={handleClickLib}
                      key={currData.id}
                    ></Card>
                  );
                }
              })}
        </Box>
      </Box>
    </Box>
  );
};

export default MyLibrary;
