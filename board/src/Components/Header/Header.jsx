import React from "react";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
//import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const navItems = [
  "About us",
  "Our approach",
  "Services",
  "How we work",
  "Career",
];
//const joinedNavItems = navItems.map(item => item.split(' ').join(''));

export default function Header() {
  return (
    <>
      <AppBar component="nav" style={{ background: "#000639" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              ml: 5,
              display: { xs: "none", sm: "block", textAlign: "left" },
            }}
          ></Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff", textTransform: "capitalize" }}
              ></Button>
            ))}
          </Box>
          <Button variant="contained" sx={{ background: "#f94363" }}>
            Contact us
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
