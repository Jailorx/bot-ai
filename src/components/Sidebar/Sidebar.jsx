import { Stack, Button } from "@mui/material";

const Sidebar = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        padding: "5px",
        backgroundColor: "#fff",
        maxWidth: "250px",
        minHeight: "100vh",
      }}
    >
      <Button variant="outlined" sx={{ fontSize: "1.2rem" }}>
        New Chat
      </Button>
      <Button variant="contained">Past Conversations</Button>
    </Stack>
  );
};

export default Sidebar;
