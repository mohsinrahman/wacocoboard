import React from "react";
import { Box, Paper } from "@mui/material";

import { useDraggable } from "@dnd-kit/core";

export function CardAtom({ task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        background: "#FFFFFF",
      }
    : { background: "#FFFFFF" };

  return (
    /* Parent div of Card starts */
    <Box
      component="div"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className=" "
      style={style}
      sx={{
        width: "218px",
        border: "1px solid #DDDCEA",
        borderRadius: "5px",
        margin: "10px 0px",
        display: "grid",
        boxShadow: "4px 2px 7px .2px rgba(0, 0, 0, 0.1)",
        gridTemplateColumns: "repeat(2, 10% 90% 1fr)",
        gap: "2",
        p: "2",
      }}
    >
      {/* left Column colored */}
      <Box
        component="div"
        sx={{
          width: "5px",
          height: "150px",
          background: "#DF0946",
          position: "relative",
          alignSelf: "center",
          borderRadius: "5px",
        }}
      ></Box>
      {/* Right Column */}
      <Box component="div" sx={{ background: "orange" }}>
        {/* Top Section */}
        <Box component="h3">{task.title}</Box>
        <Box component="p">{task.date}</Box>
        <Box component="p">{task.name}</Box>
        {/* Middle Section */}
        <Box component="p">{task.nyckle}</Box>
        <Box component="p">{task.bilnummer}</Box>
        <Box component="p">{task.order}</Box>
        {/* Last section */}
        <Box component="p">{task.status}</Box>
        {/* Right Column Ends */}
      </Box>
      {/*  Parent div of Card ends */}
    </Box>
  );
}
