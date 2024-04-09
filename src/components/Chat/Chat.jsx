import { Box, Stack, Typography, TextField, Button } from "@mui/material";

const Chat = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        color="primary.main"
        sx={{ fontWeight: "700", padding: "10px" }}
      >
        Bot AI
      </Typography>
      <Stack direction="row" spacing={3}>
        <TextField
          type="text"
          multiline
          placeholder="Message BOTAI"
          sx={{ width: "70vw" }}
        />
        <Stack direction="row" spacing={3} alignItems="end">
          <Button
            sx={{
              backgroundColor: "secondary.main",
              color: "#000",
              minWidth: "74px",
              height: "50px",
            }}
          >
            Ask
          </Button>
          <Button
            sx={{
              backgroundColor: "secondary.main",
              color: "#000",
              minWidth: "74px",
              height: "50px",
            }}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chat;
