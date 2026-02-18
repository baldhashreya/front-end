import { Button, InputAdornment, TextField } from "@mui/material";
import "../shared/styles/main.css";
import { Search } from "@mui/icons-material";
export default function Main() {
    return (
        <>
            <h1 className="main-header">How's the sky looking today?</h1>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <TextField  variant="outlined"
                label="Search"
                placeholder="Search for a city, e.g., New York"
                 InputProps={{
                    startAdornment:
                    <InputAdornment position="start">
                        <Search sx={{color: "white"}}/>
                    </InputAdornment>
                }}
                sx={{
                    color: "white",
                    maxWidth: "400px",
                    marginTop: "20px",
                    
                    '& .MuiInputLabel-root': { 
                        color: 'white', 
                    },
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: "hsl(243, 23%, 30%)",
                      '& fieldset': {
                        border: "none",
                      },
                      '&:hover fieldset': {
                        border: "none",
                      },
                      '&.Mui-focused fieldset': {
                        border: "none",
                      },
                    },
                    '& .MuiInputBase-input': {
                        color: 'white', 
                        padding: '10px 15px',
                        fontSize: '13px',
                        '&::placeholder': {
                          color: 'white',
                          opacity: 1
                        }
                    }
                  }}
                />
                <Button variant="contained" sx={{ ml: 1, height: '40px' }}>Search</Button>
            </div>
        </>
    )
}