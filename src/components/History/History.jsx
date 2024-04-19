import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";

const History = () => {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    let savedChat = JSON.parse(localStorage.getItem("chat"));
    console.log(savedChat);
    setChat(savedChat);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "5px",
        p: 1,
        mb: 1,
      }}
    >
      {chat ? (
        <>
          <Typography
            variant="h4"
            color="primary.main"
            sx={{
              fontWeight: "700",
              padding: "10px",
              flex: 1,
            }}
            mb={2}
          >
            History
          </Typography>
          <Grid
            container
            direction="column"
            spacing={1}
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.main,
              borderRadius: "5px",
              p: 1,
            }}
          >
            {chat.map((message, idx) => (
              <Grid item key={idx}>
                <Typography>
                  <b>{message["type"]}</b> : {message["content"]}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Grid container></Grid>
      )}
    </Box>
  );
};

export default History;
