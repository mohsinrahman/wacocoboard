import React from "react";
import { Box, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

export function CardAtom({ task }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({
      id: task.id,
    });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        transition,
        background: "#FFFFFF",
      }
    : { background: "#FFFFFF" };
  /*  const style = {
      transform: CSS.Transform.toString(transform),
      transition
    };
 */
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
        height: "auto",
        border: "1px solid #DDDCEA",
        borderRadius: "5px",
        margin: "10px 0px",
        display: "grid",
        boxShadow: "4px 2px 7px .2px rgba(0, 0, 0, 0.1)",
        gridTemplateColumns: "repeat(2, 5% 90% 1fr)",
        gap: "2",
        p: "2",
        fontSize: "12px",
      }}
    >
      {/* left Column colored */}
      <Box
        component="div"
        sx={{
          width: "3px",
          height: "136px",
          background: "#DF0946",
          position: "relative",
          alignSelf: "center",
          borderRadius: "5px",
        }}
      ></Box>
      {/* Right Column */}
      <Box component="div">
        {/* Top Section */}

        <Box
          component="div"
          sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <Box>
            <Box component="h3">{task.title}</Box>
            <Box component="p" sx={{ color: "#828282" }}>
              {task.name}
            </Box>
          </Box>
          <Box component="p">{task.date}</Box>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            background: "rgba(0, 0, 0, 0.12)",
            borderWidth: ".5px",
            marginTop: "0px",
            marginBottom: "0px",
          }}
        />

        {/* Middle Section */}
        <Box
          component="div"
          sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <Box>Faktura</Box>
          <Box>Sändnings</Box>
        </Box>
        <Box
          component="div"
          sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          <Box component="div">
            <Box component="p" sx={{ color: "#828282", fontSize: "10px" }}>
              Nyckle
            </Box>
            <Box component="p">{task.nyckle}</Box>
          </Box>
          <Box component="div">
            <Box component="p" sx={{ color: "#828282", fontSize: "10px" }}>
              Bilnummer
            </Box>
            <Box component="p">{task.bilnummer}</Box>
          </Box>
          <Box component="div">
            <Box component="p" sx={{ color: "#828282", fontSize: "10px" }}>
              Order
            </Box>
            <Box component="p">{task.order}</Box>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ background: "rgba(0, 0, 0, 0.12)", borderWidth: ".5px" }}
        />

        {/* Last section */}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            borderRadius: "50%",
            background: "#34C759",
            width: "16px",
            height: "16px",
            marginRight: "20px",
          }}
        ></Box>
        <Box component="p" sx={{ display: "inline-block" }}>
          {task.status}
        </Box>
        {/* Right Column Ends */}
      </Box>
      {/*  Parent div of Card ends */}
    </Box>
  );
}
