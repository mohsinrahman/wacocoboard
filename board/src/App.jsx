import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, TextField, Paper } from "@mui/material";
import { borders, color, margin } from "@mui/system";
import Emoticon from "./assets/Emoticon.png";
import { useState } from "react";
import { ColumnMolecule } from "./Components/ColumnMolecule/ColumnMolecule";
import { DndContext } from "@dnd-kit/core";
import Sidebar from "./Templates/Sidebar/Sidebar";


const COLUMNS = [
  { id: "BACKLOG", title: "BACKLOG" },
  { id: "IN_PROGRESS", title: "IN PROGRESS" },
  { id: "PENDING", title: "PENDING" },
  { id: "COMPLETED", title: "COMPLETE" },
];

const INITIAL_TASKS = [
  {
    id: "1",
    title: "Nestle",
    date: "2025-01-15",
    time: "10:30",
    name: "Jade",
    nickle: "LN+54722",
    bilnummer: "WPR4355",
    order: "3",
    status: "BACKLOG",
  },
  {
    id: "2",
    title: "Nestle",
    date: "2025-01-15",
    time: "10:30",
    name: "Jade",
    nickle: "LN+54722",
    bilnummer: "WPR4355",
    order: "3",
    status: "COMPLETED",
  },
  {
    id: "3",
    title: "Nestle",
    date: "2025-01-15",
    time: "10:30",
    name: "Jade",
    nickle: "LN+54722",
    bilnummer: "WPR4355",
    order: "3",
    status: "PENDING",
  },
  {
    id: "4",
    title: "Nestle",
    date: "2025-01-15",
    time: "10:30",
    name: "Jade",
    nickle: "LN+54722",
    bilnummer: "WPR4355",
    order: "3",
    status: "IN_PROGRESS",
  },
  {
    id: "5",
    title: "Nestle",
    date: "2025-01-15",
    time: "10:30",
    name: "Jade",
    nickle: "LN+54722",
    bilnummer: "WPR4355",
    order: "3",
    status: "IN_PROGRESS",
  },
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
       {/* Left Division Starts */}
 <Sidebar/>
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
                    {/* DndContext Starts */}
                    <DndContext onDragEnd={handleDragEnd}>
                      {COLUMNS.map((column) => {
                        return (
                          <ColumnMolecule
                            key={column.id}
                            column={column}
                            tasks={tasks.filter(
                              (task) => task.status === column.id,
                            )}
                          />
                        );
                      })}
                    </DndContext>
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
