import React from "react";
import { useState } from "react";
/* MUI */
import { Slide } from "@mui/material";
import { Box, Paper } from "@mui/material";
/* DnD Kit */
import { DndContext } from "@dnd-kit/core";
/* Components */
import { ColumnMolecule } from "../../Components/ColumnMolecule/ColumnMolecule";

/* Templates */
import Header from "../Header/Header";

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
    nyckle: "LN+54722",
    bilnummer: "WPR4355",
    order: "2",
    status: "BACKLOG",
  },
  {
    id: "2",
    title: "Nestle",
    date: "2025-01-15",
    time: "10:30",
    name: "Jade",
    nyckle: "LN+54722",
    bilnummer: "WPR4355",
    order: "13",
    status: "COMPLETED",
  },
  {
    id: "3",
    title: "Nestle",
    date: "2025-01-15",
    time: "10:30",
    name: "Jade",
    nyckle: "LN+54722",
    bilnummer: "WPR4355",
    order: "34",
    status: "PENDING",
  },
  {
    id: "4",
    title: "Nestle",
    date: "2025-01-15",
    time: "10:30",
    name: "Jade",
    nyckle: "LN+54722",
    bilnummer: "WPR4355",
    order: "22",
    status: "IN_PROGRESS",
  },
  {
    id: "5",
    title: "Nestle",
    date: "2025-01-15",
    time: "10:30",
    name: "Jade",
    nyckle: "LN+54722",
    bilnummer: "WPR4355",
    order: "55",
    status: "IN_PROGRESS",
  },
];

function Home() {
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
        <Box sx={{ gridArea: "main", height: "100%" }}>
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: "repeat(2, 65% 35% 1fr)",
            }}
          >
            <Box component="div" sx={{ background: "#FBFBFE" }}>
              Filters
            </Box>
            <Box component="div" sx={{ background: "#FBFBFE" }}>
              Users
            </Box>
          </Box>
          <Slide direction="right" in={true} timeout={300}>
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
                      tasks={tasks.filter((task) => task.status === column.id)}
                    />
                  );
                })}
              </DndContext>
              {/* DndContext Ends */}
            </Box>
          </Slide>
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

export default Home;
