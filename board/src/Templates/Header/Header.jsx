import React from "react";
import { Box } from "@mui/material";
import Emoticon from "../../assets/Emoticon.png";
/* react router dom */
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box
      sx={{
        gridArea: "header",
        height: "64px",
        borderBottom: 1,
        borderColor: "#C8CBD9",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"main main main . sidebar"`,
        }}
      >
        {/* Search Field */}
        <Box
          component="div"
          sx={{
            gridArea: "main",
            bgcolor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Box
            component="input"
            type="text"
            placeholder="Search..."
            sx={{
              width: "450px",
              height: "32px",
              bgcolor: "#F6F6FB",
              marginLeft: "20px",
              marginTop: "16px",
              border: "0px",
              borderRadius: "5px",
              paddingLeft: "10px",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            gridArea: "sidebar",
            bgcolor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Box
            component="span"
            sx={{
              display: "inline-block",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              bgcolor: "#FFE6CC",
              marginRight: "10px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "15",
                width: "14",

                position: "relative",
                top: "50%",
                transform: "translate(40%, -50%)",
              }}
              alt="Emoticon."
              src={Emoticon}
            />
          </Box>
          <Box component="span" sx={{ fontWeight: "300" }}>
            Robert Kaya
          </Box>
          <Box component="span" sx={{ fontWeight: "300", marginLeft: "10px" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname: "/login",
              }}
            >
              Login
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
