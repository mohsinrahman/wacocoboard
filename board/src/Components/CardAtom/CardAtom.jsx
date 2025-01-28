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
    <Box
      component="div"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className=" "
      style={style}
      sx={{ width: "180px", border: "1px solid #DDDCEA" }}
    >
      <Box component="h3" className="font-medium text-neutral-100">
        {task.title}
      </Box>
      <Box component="p" className="mt-2 text-sm text-neutral-400">
        {task.date}
      </Box>
      <Box component="p" className="mt-2 text-sm text-neutral-400">
        {task.name}
      </Box>
      <Box component="p" className="mt-2 text-sm text-neutral-400">
        {task.nyckle}
      </Box>
      <Box component="p" className="mt-2 text-sm text-neutral-400">
        {task.bilnummer}
      </Box>
      <Box component="p" className="mt-2 text-sm text-neutral-400">
        {task.order}
      </Box>
      <Box component="p" className="mt-2 text-sm text-neutral-400">
        {task.status}
      </Box>
    </Box>
  );
}
