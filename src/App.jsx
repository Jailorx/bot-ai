import "./App.css";
import { Box, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Box
      sx={{
        background: `linear-gradient(
        180deg,
        rgba(215, 199, 244, 0.2) 0%,
        rgba(151, 133, 186, 0.2) 100%
      )`,
      }}
    >
      <Typography>BOT AI</Typography>
      <Sidebar />
    </Box>
  );
}

export default App;
