import { useState } from "react";
import Logo from "../assets/logo.svg";

import {
  FormControl,
  Select,
  MenuItem,
  ListSubheader,
  Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CheckIcon from "@mui/icons-material/Check";

const styles = {
  value: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "hsl(240, 6%, 80%)",
  },

  settingsIcon: {
    fontSize: 18,
    color: "hsl(240, 6%, 70%)",
  },

  select: {
    width: 120,
    height: 36,
    backgroundColor: "hsla(243, 23%, 30%, 0.23)",
    borderRadius: "8px",
    color: "hsl(240, 6%, 80%)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "hsla(240, 6%, 70%, 0.3)",
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "hsla(240, 6%, 70%, 0.5)",
    },

    "& .MuiSelect-icon": {
      color: "hsl(240, 6%, 70%)",
      right: 8,
      transition: "transform 0.2s ease",
    },

    "& .MuiSelect-iconOpen": {
      transform: "rotate(180deg)",
    },
  },

  menuPaper: {
    mt: 1,
    backgroundColor: "#2a2d4f",
    borderRadius: "10px",
    width: 240,

    "& .MuiMenuItem-root": {
      color: "hsl(240, 6%, 75%)",
      fontSize: 13,
    },

    "& .MuiMenuItem-root:hover": {
      backgroundColor: "hsla(243, 23%, 40%, 0.35)",
    },

    "& .Mui-selected": {
      backgroundColor: "hsla(243, 23%, 40%, 0.45) !important",
    },
    "& .MuiList-root-MuiMenu-list": {
      left: 200,
    },
  },

  actionItem: {
    opacity: 0.85,
    color: "hsl(240, 6%, 75%)",
    fontSize: 13,
  },

  subHeader: {
    fontSize: "11px",
    color: "hsl(240, 6%, 60%)",
    backgroundColor: "transparent",
    lineHeight: "28px",
    borderBottom: "1px solid hsla(240, 6%, 60%, 0.14)",
  },

  check: {
    marginLeft: "auto",
    fontSize: 16,
    color: "hsl(240, 6%, 75%)",
  },
};
export function Navigation() {
  const [unit, setUnit] = useState("c");
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 24px",
        margin: "50px",
      }}
    >
      <img
        src={Logo}
        alt="Weather application logo"
      />

      <FormControl sx={{ width: 150 }}>
        <Select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          displayEmpty
          IconComponent={ExpandMoreIcon}
          renderValue={() => (
            <Box sx={styles.value}>
              <SettingsOutlinedIcon sx={styles.settingsIcon} />
              Units
            </Box>
          )}
          sx={{
            ...styles.select,
          }}
          MenuProps={{
            anchorReference: "anchorPosition",
            anchorPosition: { top: 100, left: window.innerWidth - 225 },
            PaperProps: {
              sx: styles.menuPaper,
            },
          }}
        >
          <MenuItem
            disabled
            sx={styles.actionItem}
          >
            Switch to Imperial
          </MenuItem>

          <ListSubheader sx={styles.subHeader}>Temperature</ListSubheader>
          <MenuItem value="c">
            Celsius (°C) {unit === "c" && <CheckIcon sx={styles.check} />}
          </MenuItem>
          <MenuItem value="f">
            Fahrenheit (°F) {unit === "f" && <CheckIcon sx={styles.check} />}
          </MenuItem>

          <ListSubheader sx={styles.subHeader}>Wind Speed</ListSubheader>
          <MenuItem value="kmh">
            km/h {unit === "kmh" && <CheckIcon sx={styles.check} />}
          </MenuItem>
          <MenuItem value="mph">
            mph {unit === "mph" && <CheckIcon sx={styles.check} />}
          </MenuItem>

          <ListSubheader sx={styles.subHeader}>Precipitation</ListSubheader>
          <MenuItem value="mm">
            Millimeters (mm) {unit === "mm" && <CheckIcon sx={styles.check} />}
          </MenuItem>
          <MenuItem value="in">
            Inches (in) {unit === "in" && <CheckIcon sx={styles.check} />}
          </MenuItem>
        </Select>
      </FormControl>
    </nav>
  );
}
