import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles";
import SearchIcon from '@mui/icons-material/Search';
import Icon from "../../atoms/icons";
import Typography from "../../atoms/Typography";
const useStyle = makeStyles({
    searchbox: {
        width: "598px",
        height: "28px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        position: "relative"
    },
    frame1: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "0px",
        position: "static",
        width: "212px",
        height: "24px",
        left: "0px",
        top: "0px",
        flex: "none",
        order: "0",
        flexGrow: "0",
        margin: "4px 0px"
    },
    searchcontainer: {
        width: "24px",
        height: "24px",
        position: "absolute",
        left: "0%",
        right: "0%",
        top: "0%",
        bottom: "0%"
    },
    searchicon: {
        width: "18.39px !important",
        height: "18.39px !important",
        position: "absolute",
        left: "12.34%",
        right: "11.03%",
        top: "12.34%",
        bottom: "11.03%"
    },
    search: {
        position: "static",
        width: "180px",
        height: "24px",
        left: "32px",
        top: "0px",
        fontFamily: "Cera Pro !important",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "24px",
        color: "#747575",
        flex: "none",
        order: "1",
        flexGrow: "0",
        margin: "0px 28px !important"
    },
    vector1: {
        position: "static",
        width: "598px",
        height: "0px",
        left: "0px",
        top: "28px",
        border: "1px solid #BAC9CF",
        flex: "none",
        order: "1",
        flexGrow: "0",
        margin: "4px 0px"
    }
});


const SearchBar = () => {
    const classes = useStyle();
    return(
        <Box className={classes.searchbox}>
            <Box className={classes.vector1}>
            </Box>
            <Box className={classes.frame1}>
                <Box className={classes.searchcontainer}>
                    <Icon Icons={<><SearchIcon className={classes.searchicon}></SearchIcon></>}></Icon>
                </Box>
                <Typography className={classes.search}>Search by title or author</Typography>
            </Box>
        </Box>
    )
}

export default SearchBar;