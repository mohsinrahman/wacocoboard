import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, TextField, Paper } from "@mui/material";
import { borders, color, margin } from "@mui/system";
import logo from "./assets/logo.png";
import Emoticon from "./assets/Emoticon.png";
import Chart from "./assets/Chart.png";
import Card from "./Components/Card/Card";
import { useState } from 'react';
import Column from "./Components/Column/Column";
import { DndContext} from '@dnd-kit/core';

const COLUMNS = [
  { id: 'BACKLOG', title: 'BACKLOG' },
  { id: 'IN_PROGRESS', title: 'IN PROGRESS' },
  { id: 'PENDING', title: 'PENDING' },
  { id: 'COMPLETED', title: 'COMPLETE' },
];

const INITIAL_TASKS = [
  {
    id: '1',
    title: 'Nestle',
    Date: "2025-01-15",
    Time: "10:30",
    Name: "Jade",
    Nickle: "LN+54722",
    Bilnummer: "WPR4355",
    Order: "3",
    status: "BACKLOG"
  },
  {
    id: '2',
    title: 'Nestle',
    Date: "2025-01-15",
    Time: "10:30",
    Name: "Jade",
    Nickle: "LN+54722",
    Bilnummer: "WPR4355",
    Order: "3",
    status: "COMPLETED"
  },
  {
    id: '3',
    title: 'Nestle',
    Date: "2025-01-15",
    Time: "10:30",
    Name: "Jade",
    Nickle: "LN+54722",
    Bilnummer: "WPR4355",
    Order: "3",
    status: "PENDING"
  },
  {
    id: '4',
    title: 'Nestle',
    Date: "2025-01-15",
    Time: "10:30",
    Name: "Jade",
    Nickle: "LN+54722",
    Bilnummer: "WPR4355",
    Order: "3",
    status: "IN_PROGRESS"
  },
  {
    id: '5',
    title: 'Nestle',
    Date: "2025-01-15",
    Time: "10:30",
    Name: "Jade",
    Nickle: "LN+54722",
    Bilnummer: "WPR4355",
    Order: "3",
    status: 'IN_PROGRESS',
  }
];


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

export default function App() {

  const [tasks, setTasks] = useState(INITIAL_TASKS);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task,
      ),
    );
  }

  return (
    <Box sx={{ width: 1 }}>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 0 }}
      >
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

        {/* Right Division Starts */}
        <Box
          sx={{
            gridColumn: "span 10",
            "& .MuiPaper-root": {
              padding: "0px",
            },
          }}
        >
          <Division sx={{ textAlign: "left" }}>
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
                    <Box sx={{ gridArea: "sidebar", bgcolor: "#fff",display: "flex",
                        justifyContent: "center",
                        alignSelf: "center" }}>
                      <Box 
                      component="span" 
                      sx={{
                        display: "inline-block",
                        width:"30px",
                        height:"30px",
                        borderRadius:"50%",
                        bgcolor:"#FFE6CC",
                        marginRight:"10px"
                        }}>
                      <Box
                        component="img"
                        sx={{
                          height: "15",
                          width: "14",
                          
                          position: "relative",
                          top: "50%",
                          transform: "translate(40%, -50%)"
                        }}
                        alt="Emoticon."
                        src={Emoticon}
                      />
                      </Box>
                      <Box 
                      component="span"
                      sx={{fontWeight:"300"}}
                      > 
                      Robert Kaya
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ gridArea: "main" }}>
                  <Box
                    component="div"
                    sx={{
                      display: "grid",
                      gap: 2,
                      gridTemplateColumns: "repeat(4, 1fr)",
                      padding: ".5em",
                    }}
                  >
                    {/* Back Log Starts */}
                    <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => {
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
              />
            );
          })}
        </DndContext>
                    {/* Completed Ends */}
                  </Box>
                </Box>
                <Box
                  sx={{
                    gridArea: "sidebar",
                    width: "250px",
                    borderLeft: 1,
                    borderColor: "#C8CBD9",
                    height: "calc(100vh)",
                  }}
                >
                  Sidebar
                </Box>
              </Box>
            </Box>
          </Division>
        </Box>
      </Box>
    </Box>
  );
}

/*      <Box component="div" sx={{borderBottom: 1,
          borderColor: "#C8CBD9",
          width: "100%",
          height: "50px"}} >

            
          {/* <TextField fullWidth label="Search" id="fullWidth"
           sx={{background:"#F6F6FB", height:"32px", width:"500px" , textAlign:"left" , paddingTop: "4px",
           PaddingBottom:"34px", border: "0px"}} /> 
           </Box>
            
            <Box component="div"  sx={{borderLeft: 1,
            borderRight: 1,
          borderColor: "#C8CBD9",
          width: "200px",
          height: "100%"}}>
            ghjk
            </Box> */
