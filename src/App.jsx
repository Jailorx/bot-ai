import "./App.css";
import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import History from "./components/History/History";
import { useState } from "react";

function App() {
  const [showHistory, setShowHistory] = useState(false);
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
      <Stack spacing={2} direction="row">
        <Sidebar showHistory={setShowHistory} />
        {showHistory ? <History /> : <Chat />}
      </Stack>
    </Box>
  );
}

export default App;
