import "./App.css";
import LogoImg from "./assets/logo.svg";
import TextField from "@mui/material/TextField";
import Dashboard from "./assets/illustration-dashboard.png";
import { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setError("");
    } else if (!emailRegex.test(value)) {
      setError("Please provide a valid email address");
    } else {
      setError("");
    }
  };

  return (
    <div className="main-container">
      <img
        src={LogoImg}
        alt="Logo Img"
      />

      <h1>
        We are launching <span>soon!</span>
      </h1>

      <p>Subscribe and get notified</p>

      <div className="input-block">
        <TextField
          variant="outlined"
          type="email"
          required
          placeholder="Your Email Address..."
          value={email}
          onChange={handleEmailChange}
          error={Boolean(error)}
          helperText={error}
          sx={{
            width: "300px",
            "& .MuiOutlinedInput-root": {
              height: "30px",
              borderRadius: "18px",
            },
            "& .MuiOutlinedInput-input": {
              padding: "9px 25px",
              fontSize: "10px",
            },
          }}
        />

        <button
          className="login-button"
          disabled={Boolean(error) || !email}
        >
          Notify Me
        </button>
      </div>

      <img
        className="dashboard-img"
        src={Dashboard}
        alt="Dashboard"
      />

      <div className="nav-button">
        <button>
          <Facebook />
        </button>
        <button>
          <Twitter />
        </button>
        <button>
          <Instagram />
        </button>
      </div>
      <p className="nav">&copy; Copyright Ping. All rights reserved.</p>
    </div>
  );
}

export default App;
