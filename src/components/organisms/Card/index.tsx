import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Img from "../../atoms/images";
import Icon from "../../atoms/icons";
import Typography from "../../atoms/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTimeOutlined";
import PersonIcon from "@mui/icons-material/PersonOutline";
import { MoreHoriz } from "@mui/icons-material";

const useStyle = makeStyles({
  Rectangle3: {
    width: "284px",
    height: "466px",
    borderRadius: "8px",
    position: "absolute",
    left: "0%",
    right: "0%",
    bottom: "0%",
    background: "#FFFFFF",
    border: "1px solid #E1ECFC",
    boxSizing: "border-box",
  },
  HumanToWork: {
    color: "#03314B",
    width: "225px",
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
  },
  Author: {
    width: "95px",
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
    color: "#6D787E",
  },
  TimeIcon: {
    width: "16.67px !important",
    height: "16.67px !important",
  },
  Group6: {
    width: "120px",
    height: "20px",
    position: "absolute",
    left: "5.63%",
    right: "52.11%",
    top: "82.62%",
    bottom: "13.09%",
  },
  TimeIconContainer: {
    width: "20px",
    height: "20px",
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
  },
  MinuteRead: {
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
  },
  imageContainer: {
    width: "20px",
    height: "20px",
    right: "87.32%",
    top: "82.62%",
    bottom: "13.09%",
  },
  UserContainer: {
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
  },
  usericon: {
    width: "20px !important",
    height: "20px !important",
    position: "absolute",
    left: "16.67%",
    right: "16.67%",
    top: "4.17%",
    bottom: "8.33%",
  },
  frame7: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    position: "absolute",
    left: "63.38%",
    right: "5.63%",
    top: "82.62%",
    bottom: "13.09%",
  },
  reads: {
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
  },
  uservector: {
    width: "20px",
    height: "20px",
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
  },
  morehoriz: {
    position: "absolute",
    left: "12.5%",
    right: "12.5%",
    top: "41.67%",
    bottom: "41.67%"
  },
  more: {
    position: "absolute",
    left: "85.92%",
    right: "5.63%",
    top: "89.06%",
    bottom: "5.79%"
  },
  morecontainer: {
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%"
  },
  rectangle7: {
    width: "88px",
    height: "15px",
    position: "absolute",
    left: "0%",
    right: "69.01%",
    top: "96.78%",
    bottom: "0%",
    background: "#E1ECFC",
    borderRadius: "0px 0px 0px 8px",
    zIndex: "1"
  },
  rectangle6: {
    width: "283px",
    height: "15px",
    position: "absolute",
    left: "0%",
    right: "0.35%",
    top: "96.78%",
    bottom: "0%",
    background: "#F1F6F4",
    border: "1px solid #E1ECFC",
    boxSizing: "border-box",
    borderRadius: "0px 0px 8px 8px"
  }
});

type CardProps = {
  imgsrc: string,
  bookname: string,
  author: string,
}
const Card = (props: CardProps) => {
  const classes = useStyle();
  const {imgsrc, bookname, author } = props;
  return (
    <Box className={classes.Rectangle3}>
      <Box>
        <Img
          src={imgsrc}
          height="282px"
          width="287px"
        ></Img>
      </Box>
      <Typography className={classes.HumanToWork} variant="subtitle1">
        {bookname}
      </Typography>
      <Typography className={classes.Author} variant="body1">{author}</Typography>
      <Box className={classes.Group6}>
        <Box className={classes.imageContainer}>
          <Box className={classes.TimeIconContainer}>
            <Icon
              Icons={
                <AccessTimeIcon className={classes.TimeIcon}></AccessTimeIcon>
              }
            ></Icon>
          </Box>
        </Box>
      </Box>
      <Typography className={classes.MinuteRead} variant="caption">13-minute read</Typography>
      <Box className={classes.frame7}>
        <Typography className={classes.reads} variant="caption">1.9k reads</Typography>
        <Box className={classes.UserContainer}>
          <Box className={classes.uservector}>
            <Icon
              Icons={<PersonIcon className={classes.usericon}></PersonIcon>}
            ></Icon>
          </Box>
        </Box>
      </Box>
      <Box className={classes.more}>
        <Box className={classes.morecontainer}>
          <Icon
            Icons={<MoreHoriz className={classes.morehoriz}></MoreHoriz>}
          ></Icon>
        </Box>
      </Box>
      <Box className={classes.rectangle7}>
      </Box>
      <Box className={classes.rectangle6}></Box>
    </Box>
  );
};

export default Card;
