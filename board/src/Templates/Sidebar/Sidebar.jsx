import React from 'react'
import { styled } from "@mui/material/styles";
import { Box, Typography, TextField, Paper } from "@mui/material";
import logo from "../../assets/logo.png"
import Chart from "../../assets/Chart.png";






export default function Sidebar() {
    const Division = styled(Paper)(({ theme }) => ({
        backgroundColor: "#fff",
        height: "100vh",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        ...theme.applyStyles("dark", {
          backgroundColor: "#1A2027",
        }),
      }));
  return (
    <Box
    sx={{
      gridColumn: "span 2",
      "& .MuiPaper-root": {
        padding: "0px",
      },
    }}
  >
    <Division sx={{ background: "#F1F2F7" }}>
      <Box
        component="div"
        sx={{
          borderBottom: 1,
          borderColor: "#C8CBD9",
          width: "100%",
          height: "64px",
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          sx={{
            height: 23,
            width: 154,
            marginTop: "28px",
          }}
          alt="Workspace."
          src={logo}
        />
      </Box>
      <Typography variant="p" component="p" sx={{ marginTop: "40px" }}>
        PRODUKTION
      </Typography>
      <Box
        component="div"
        sx={{
          background: "rgba(112, 127, 221, 0.10)",
          width: "200px",
          height: "50px",
          textAlign: "center",
          color: "#707FDD",
          Opacity: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          marginTop: "12px",
        }}
      >
        <Box component="p" sx={{ letterSpacing: "1.3px" }}>
          {" "}
          <Box
            component="img"
            sx={{
              height: 18,
              width: 18,
              verticalAlign: "middle",
              marginRight: "20px",
            }}
            alt="Workspace."
            src={Chart}
          />{" "}
          Taskboard
        </Box>
      </Box>
    </Division>
  </Box>
  )
}
