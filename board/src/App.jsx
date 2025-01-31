import * as React from "react";
/* React Router */
import { Routes, Route } from "react-router";
/* Material UI */
import { Box } from "@mui/material";
/* Templates */
import Sidebar from "./Templates/Sidebar/Sidebar";
import Home from "./Templates/Home/Home";
import Invoice from "./Templates/Invoice/Invoice";
import Login from "./Templates/Login/Login";

import { PDFViewer } from "@react-pdf/renderer";

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
            backgroundColor: "#fff",
            minHeight: "100vh",
            overflow: "auto",
            textAlign: "center",
          }}
        >
          {/* Search bar  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}
