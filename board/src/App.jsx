import * as React from "react";
/* Material UI */
import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";
/* Components */
import { ColumnMolecule } from "./Components/ColumnMolecule/ColumnMolecule";
/* Templates */
import Sidebar from "./Templates/Sidebar/Sidebar";
import Home from "./Templates/Home/Home";

export default function App() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: 0,
      }}
    >
      {/* Left Division Starts */}
      <Sidebar />
      {/* Left Division Ends */}
      {/* Right Division Starts */}
      <Box
        sx={{
          gridColumn: "span 10",
          "& .MuiPaper-root": {
            padding: "0px",
          },
        }}
      >
        <Box
          component="div"
          sx={{
            textAlign: "left",
            backgroundColor: "#fff",
            minHeight: "100vh",
            overflow: "auto",
            textAlign: "center",
          }}
        >
          {/* Search bar  */}
          <Home />
        </Box>
      </Box>
    </Box>
  );
}
