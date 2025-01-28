import React from "react";
import { styled } from "@mui/material/styles";
import { useDroppable } from "@dnd-kit/core";
import { Box, Typography, Paper } from "@mui/material";
import {Card} from "../Card/Card";

export function Column({ column, tasks }) {
  console.log(column, tasks);
  const { setNodeRef } = useDroppable({
    id: column.id,
  });
  return (
    <>
      <Box
        component="div"
        sx={{
          background: "#DDDCEA",
          boxShadow: "4px 2px 7px .2px rgba(0, 0, 0, 0.1)",
          marginTop: "148px",
          height: "400px",
          border: "1px solid #DDDCEA",
          borderRadius: "5px",
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
            fontWeight: "200",
          }}
        >
          <Box component="span">{column.title}</Box>
        </Box>
        <Box ref={setNodeRef}>
          {tasks.map((task) => {
            return <Card key={task.id} task={task} />;
          })}
        </Box>
      </Box>
    </>
  );
}

/*  <Box  
                      component="div"
                      sx={{
                        background: "#DDDCEA",
                        boxShadow: "4px 2px 7px .2px rgba(0, 0, 0, 0.1)",
                        marginTop: "148px",
                        height: "400px",
                        border: "1px solid #DDDCEA",
                        borderRadius: "5px",
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
                          fontWeight: "200",
                        }}
                      >
                        <Box component="span">BACKLOG</Box>
                      </Box>
                      <Box>
                        <Card />
                      </Box>
                    </Box>
                    <Box
                      component="div"
                      sx={{
                        background: "#DDDCEA",
                        boxShadow: "4px 2px 7px .2px rgba(0, 0, 0, 0.1)",
                        marginTop: "148px",
                        height: "200px",
                        border: "1px solid #DDDCEA",
                        borderRadius: "5px",
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
                          fontWeight: "200",
                        }}
                      >
                        <Box component="span">IN PROGRESS</Box>
                      </Box>
                      <Box>
                        <Card />
                      </Box>
                    </Box>
                    <Box
                      component="div"
                      sx={{
                        background: "#DDDCEA",
                        boxShadow: "4px 2px 7px .2px rgba(0, 0, 0, 0.1)",
                        marginTop: "148px",
                        height: "300px",
                        border: "1px solid #DDDCEA",
                        borderRadius: "5px",
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
                          fontWeight: "200",
                        }}
                      >
                        <Box component="span">PENDING</Box>
                      </Box>
                      <Box>
                        <Card />
                      </Box>
                    </Box>
                    <Box
                      component="div"
                      sx={{
                        background: "#DDDCEA",
                        boxShadow: "4px 2px 7px .2px rgba(0, 0, 0, 0.1)",
                        marginTop: "148px",
                        height: "400px",
                        border: "1px solid #DDDCEA",
                        borderRadius: "5px",
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
                          fontWeight: "200",
                        }}
                      >
                        <Box component="span">COMPLETED</Box>
                      </Box>
                      <Box>
                        <Card />
                      </Box>
                    </Box> */
