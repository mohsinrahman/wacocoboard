import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { Box } from "@mui/material";
import { CardAtom } from "../CardAtom/CardAtom";

export function ColumnMolecule({ column, tasks }) {
  console.log(column, tasks);
  const { setNodeRef } = useDroppable({
    id: column.id,
  });
  return (
    <>
      <Box
        component="div"
        sx={{
          background: "#FBFBFE",
          width: "238px",
          boxShadow: "4px 2px 7px .2px rgba(0, 0, 0, 0.1)",
          marginTop: "148px",
          minHeight: "400px",
          border: "1px solid #DDDCEA",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Box
          component="div"
          sx={{
            background: "#ffffff",
            width: "100%",
            height: "44px",
            lineHeight: "44px",
            borderRadius: "5px 5px 0 0",
            textAlign: "center",
            letterSpacing:"1px"
            
          }}
        >
          <Box component="span" sx={{fontSize:"16px",fontWeight: "bold"}}>{column.title}</Box>
        </Box>
        <Box ref={setNodeRef}>
          {tasks.map((task) => {
            return <CardAtom key={task.id} task={task} />;
          })}
        </Box>
      </Box>
    </>
  );
}
