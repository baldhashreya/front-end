import { Button, InputAdornment, TextField } from "@mui/material";
import "../shared/styles/main.css";
import { Search } from "@mui/icons-material";
export default function SearchBar() {
  return (
    <>
      <h1 className="main-header">How's the sky looking today?</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for a city, e.g., New York"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            color: "#ffffff75",
            width: "400px",
            marginTop: "20px",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "hsla(243, 23%, 30%, 0.76)",
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
            "& .MuiInputBase-input": {
              color: "white",
              padding: "10px 15px",
              fontSize: "13px",
              "&::placeholder": {
                color: "white",
                opacity: 1,
              },
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            marginTop: "20px",
            height: "40px",
            marginLeft: "10px",
            textTransform: "none",
            fontWeight: "bold",
            backgroundColor: "hsl(248, 70%, 36%)",
          }}
        >
          Search
        </Button>
      </div>
    </>
  );
}
