import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Img from "../../atoms/Images";
import Icon from "../../atoms/Icons";
import Typography from "../../atoms/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTimeOutlined";
import PersonIcon from "@mui/icons-material/PersonOutline";
import { MoreHoriz } from "@mui/icons-material";
import ProgressBar from "../../atoms/ProgressBar";
import AddButton from "../../molecules/Button";
import { Link } from "react-router-dom";
const useStyle = makeStyles({
  rectangle6: {
    position: "absolute",
    left: "0%",
    right: "0.35%",
    top: "96.78%",
    bottom: "0%",
  },
});
type CardProps = {
  imgsrc: string;
  bookname: string;
  author: string;
  status: string;
  id: string | number;
  handleClick: Function;
};
const Card = (props: CardProps) => {
  const classes = useStyle();
  const { imgsrc, bookname, author, status, id, handleClick } = props;
  let button;
  if (status == "Null")
    button = (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          height: "52px",
          width: "284px",
          left: "0px",
          top: "414px",
          border: "1px solid #E1ECFC",
          boxSizing: "border-box",
          borderRadius: "0px 0px 8px 8px",
        }}
        onClick={(e: any) => {
          console.log(e);
          handleClick(id);
        }}
      >
        <AddButton content="Add To Library"></AddButton>
      </Box>
    );
  else if (status == "Reading")
    button = (
      <div data-testid="button">
        <Box
          sx={{
            position: "absolute",
            left: "85.92%",
            right: "5.63%",
            top: "89.06%",
            bottom: "5.79%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "0%",
              right: "0%",
              top: "0%",
              bottom: "0%",
            }}
          >
            <Icon
              Icons={
                <MoreHoriz
                  sx={{
                    position: "absolute",
                    left: "12.5%",
                    right: "12.5%",
                    top: "41.67%",
                    bottom: "41.67%",
                  }}
                ></MoreHoriz>
              }
            ></Icon>
          </Box>
        </Box>
        <ProgressBar value={25} className={classes.rectangle6}></ProgressBar>
      </div>
    );
  else if (status == "Finished") {
    button = (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          height: "52px",
          width: "284px",
          left: "0px",
          top: "414px",
          border: "1px solid #E1ECFC",
          boxSizing: "border-box",
          borderRadius: "0px 0px 8px 8px",
        }}
        onClick={(e: any) => {
          console.log(e);
          handleClick(id);
        }}
        data-testid="card-library-handler"
      >
        <AddButton content="Read Again"></AddButton>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        width: "284px",
        height: "466px",
        borderRadius: "8px",
        position: "relative",
        background: "#FFFFFF",
        border: "1px solid #E1ECFC",
        boxSizing: "border-box",
        marginBottom: "25px",
      }}
    >
      <Box>
        <Link to={`/book-info/${id}`}>
          <Img src={imgsrc} height="282px" width="287px"></Img>
        </Link>
      </Box>
      <Typography
        sx={{
          color: "#03314B !important",
          width: "fit-content",
          position: "absolute",
          left: "5.63%",
          right: "15.14%",
          top: "66.52%",
          bottom: "28.54%",
          fontFamily: "Cera Pro !important",
          fontSize: "18px !important",
          fontStyle: "normal",
          fontWeight: "bold !important",
          lineHeight: "22.63px !important",
        }}
      >
        {bookname}
      </Typography>
      <Typography
        sx={{
          width: "fit-content",
          height: "20px",
          position: "absolute",
          left: "5.63%",
          right: "60.92%",
          top: "74.89%",
          bottom: "20.82%",
          fontFamily: "Cera Pro !important",
          fontStyle: "normal",
          fontWeight: "normal !important",
          fontSize: "16px !important",
          lineHeight: "20.11px !important",
          color: "#6D787E !important",
        }}
        variant="body1"
      >
        {author}
      </Typography>
      <Box
        sx={{
          width: "120px",
          height: "20px",
          position: "absolute",
          left: "5.63%",
          right: "52.11%",
          top: "82.62%",
          bottom: "13.09%",
        }}
      >
        <Box
          sx={{
            width: "20px",
            height: "20px",
            right: "87.32%",
            top: "82.62%",
            bottom: "13.09%",
          }}
        >
          <Box
            sx={{
              width: "20px",
              height: "20px",
              position: "absolute",
              left: "0%",
              right: "0%",
              top: "0%",
              bottom: "0%",
            }}
          >
            <Icon
              Icons={
                <AccessTimeIcon
                  sx={{
                    width: "16.67px !important",
                    height: "16.67px !important",
                  }}
                ></AccessTimeIcon>
              }
            ></Icon>
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{
          width: "96px",
          height: "18px",
          position: "absolute",
          left: "14.08%",
          right: "52.11%",
          top: "82.83%",
          bottom: "13.3%",
          fontFamily: "Cera Pro !important",
          fontStyle: "normal",
          fontWeight: "normal !important",
          fontSize: "14px !important",
          lineHeight: "17.6px !important",
          color: "#6D787E",
        }}
        variant="caption"
      >
        13-minute read
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "0px",
          position: "absolute",
          left: "63.38%",
          right: "5.63%",
          top: "82.62%",
          bottom: "13.09%",
        }}
      >
        <Typography
          sx={{
            height: "18px",
            position: "static",
            left: "27.27%",
            right: "0%",
            top: "5%",
            bottom: "5%",
            fontFamily: "Cera Pro !important",
            fontSize: "14px !important",
            lineHeight: "18px !important",
            textAlign: "right",
            color: "#6D787E",
            flex: "none",
            order: "1",
            flexGrow: "0",
            margin: "0px 4px",
          }}
          variant="caption"
        >
          1.9k reads
        </Typography>
        <Box
          sx={{
            width: "20px",
            height: "20px",
            position: "static",
            left: "0%",
            right: "77.27%",
            top: "0%",
            bottom: "0%",
            flex: "none",
            order: "0",
            flexGrow: "0",
            margin: "0px 4px",
          }}
        >
          <Box
            sx={{
              width: "20px",
              height: "20px",
              position: "absolute",
              left: "0%",
              right: "0%",
              top: "0%",
              bottom: "0%",
            }}
          >
            <Icon
              Icons={
                <PersonIcon
                  sx={{
                    width: "20px !important",
                    height: "20px !important",
                    position: "absolute",
                    left: "16.67%",
                    right: "16.67%",
                    top: "4.17%",
                    bottom: "8.33%",
                  }}
                ></PersonIcon>
              }
            ></Icon>
          </Box>
        </Box>
      </Box>
      {button}
    </Box>
  );
};

export default Card;
