import React from "react";

/* MUI */
import { Slide } from "@mui/material";
import { Box, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";

/* MUI Table */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

/* DnD Kit */
import { DndContext } from "@dnd-kit/core";
/* Components */
import { ColumnMolecule } from "../../Components/ColumnMolecule/ColumnMolecule";

/* Templates */
import Header from "../Header/Header";

import Chart from "../../assets/Chart.png";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Social Poster ", 159, 6.0, 24, 4.0),
  createData("Logo", 237, 9.0, 37, 4.3),
  createData("Web Banner", 262, 16.0, 24, 6.0),
  createData("Animation", 305, 3.7, 67, 4.3),
  createData("Video", 356, 16.0, 49, 3.9),
];

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
              padding: "0px",
              minHeight: "100vh",
            }}
          >
            <Box component="div" sx={{ background: "" }}>
              <Box
                component="div"
                sx={{ width: "210px", height: "72px", background: "#FBFBFE" }}
              >
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
                <Box component="p">Click to upload</Box>
              </Box>
            </Box>
            <Slide direction="up" in={true} timeout={300}>
              <Box
                component="div"
                sx={{ borderRight: "1px solid #C8CBD9", padding: "0px" }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
                    textAlign: "left",
                  }}
                >
                  <Box component="div">
                    <Box component="h2">THE COMPANY</Box>
                    <Box component="p">Alpha Tower, Bengaluru, India</Box>
                    <Box component="p">
                      the.company@company.com +93 93 904 093
                    </Box>
                  </Box>
                  <Box component="div" sx={{ marginTop: "18px" }}>
                    Invoice #00001
                  </Box>
                </Box>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    background: "rgba(0, 0, 0, 0.12)",
                    borderWidth: ".5px",
                    marginTop: "0px",
                    marginBottom: "20px",
                    marginRight: "20px",
                  }}
                />

                <Box
                  component="div"
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
                    textAlign: "left",
                  }}
                >
                  <Box component="div">
                    <Box component="h2">Zayn Ahamed</Box>
                    <Box component="p">
                      Orion Frontieres, Kulla Lampur, Malaysia
                    </Box>
                  </Box>
                  <Box component="div">
                    <Box component="p">Invoice Number: INV-00001</Box>
                    <Box component="p">Invoice Date: 10 Mar 2023</Box>
                  </Box>
                </Box>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    background: "rgba(0, 0, 0, 0.12)",
                    borderWidth: ".5px",
                    marginTop: "0px",
                    marginBottom: "20px",
                    marginRight: "20px",
                  }}
                />

                {/* Table Starts */}
                <TableContainer component={Paper} sx={{ marginRight: "20px" }}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Item Discription</TableCell>
                        <TableCell align="right">Qty</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Weight</TableCell>
                        <TableCell align="right">Amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                {/* Table ends */}

                {/* Grand total Area Starts */}
                <Box
                  component="div"
                  sx={{
                    background: "#F9F9FA",
                    width: "282px",
                    height: "100px",
                    marginTop: "20px",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                  >
                    <Box component="p" sx={{ margin: "7px 0px" }}>
                      Total
                    </Box>
                    <Box component="p" sx={{ margin: "7px 0px" }}>
                      00
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                  >
                    <Box component="p" sx={{ margin: "7px 0px" }}>
                      Total
                    </Box>
                    <Box component="p" sx={{ margin: "7px 0px" }}>
                      11
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                  >
                    <Box component="p" sx={{ margin: "7px 0px" }}>
                      Grand Total
                    </Box>
                    <Box component="p" sx={{ margin: "7px 0px" }}>
                      22
                    </Box>
                  </Box>
                </Box>
                {/* Grand total Area Ends */}

                <Box
                  component="div"
                  sx={{
                    width: "100%",
                    height: "74px",
                    background: "#F9F9FA",
                    display: "grid",
                    marginTop: "50px",
                  }}
                >
                  <Box component="p" sx={{ placeSelf: "center" }}>
                    Please use INV-00001 as a further reference number
                  </Box>
                </Box>
              </Box>
            </Slide>
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
