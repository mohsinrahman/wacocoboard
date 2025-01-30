
import React from "react";
import { useState } from "react";

import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";
/* DnD Kit */
import { DndContext } from "@dnd-kit/core";
/* Components */
import { ColumnMolecule } from "../../Components/ColumnMolecule/ColumnMolecule";

/* Templates */
import Header from "../Header/Header";

import Chart from "../../assets/Chart.png";



function Invoice() {

  return (
    <Box
      sx={{
        width: "100%",
        height: "140px",
        color: "#fff",
        "& > .MuiBox-root > .MuiBox-root": {
          p: 1,
          padding: "0px",
          fontSize: "0.875rem",
          fontWeight: "700",
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header"
                              "main main main sidebar"`,
          color: "#000",
        }}
      >
        {/* Header  */}
        <Header />
        {/* Header Ends */}
        {/* Main content */}
        <Box sx={{ gridArea: "main", height: "100%" }}>
          <Box
            component="div"
            sx={{
              display: "grid",
              gap: 0,
              gridTemplateColumns: "repeat(2,20% 80% 1fr)",
              padding: ".5em",
              minHeight:"100vh"
            }}
          >
            <Box component="div" sx={{background:""}}>
<Box component="div" sx={{width:"210px", height:"72px", background:"#FBFBFE"}}>
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
            />
  <Box component="p">
            Click to upload
  </Box>
  </Box></Box>
            <Box component="div" sx={{background:"red"}}>
Invoice
            </Box>

          </Box>
        </Box>
        
        <Box
          sx={{
            gridArea: "sidebar",
            width: "160px",
            borderLeft: 1,
            borderColor: "#C8CBD9",
            height: "100%",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default Invoice;
