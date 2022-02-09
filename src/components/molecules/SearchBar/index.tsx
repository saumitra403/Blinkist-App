import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import InputAdornment from '@mui/material/InputAdornment';
const useStyle = makeStyles({
  searchbar: {
    position: "static",
    left: "0px",
    top: "0px",
  }
});

const SearchBar = () => {
  const classes = useStyle();
  return (
    <TextField
      placeholder="Search by title or author"
      variant="standard"
      InputProps={{
        startAdornment: (
            <InputAdornment position="start">
                <Search></Search>
            </InputAdornment>
        ),
      }}
      sx={{width: "658px",height: "46px", marginBottom: "135px"}}
    ></TextField>
  );
};

export default SearchBar;
