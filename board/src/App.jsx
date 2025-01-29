import * as React from "react";
import { useState } from "react";
/* Material UI */
import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";
/* DnD Kit */
import { DndContext } from "@dnd-kit/core";
/* Components */
import { ColumnMolecule } from "./Components/ColumnMolecule/ColumnMolecule";
/* Templates */
import Sidebar from "./Templates/Sidebar/Sidebar";
import Header from "./Templates/Header/Header";

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
    order: "2",
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
    order: "13",
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
    order: "34",
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
    order: "22",
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
    order: "55",
    status: "IN_PROGRESS",
  },
];

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
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: 0,
        background: "yellow",
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
            border: "1px solid green",
            minHeight: "100vh",
            overflow: "auto",
            textAlign: "center",
          }}
        >
          {/* Search bar  */}
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
                  {/* DndContext Ends */}
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
              >
                Sidebar
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
