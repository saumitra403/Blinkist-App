import { TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import InputAdornment from '@mui/material/InputAdornment';

const SearchBar = () => {
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
      data-testid="box"
    ></TextField>
  );
};

export default SearchBar;
