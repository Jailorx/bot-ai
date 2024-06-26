import { Drawer, Stack, Button, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NewChatImage from "../../assets/images/new-chat-image.png";
import BotAiImage from "../../assets/images/bot-ai-image.png";
import { useState } from "react";

const Sidebar = ({ showHistory }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        onClick={() => setIsSidebarOpen(true)}
        sx={{ color: (theme) => theme.palette.primary.main }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      <Drawer
        achor="left"
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      >
        <Stack
          spacing={2}
          sx={{
            padding: "5px",
            backgroundColor: "#fff",
            width: "300px",
            minHeight: "100vh",
          }}
        >
          <Button
            sx={{
              fontSize: "1.2rem",
              gap: "10px",
              backgroundColor: "#D7C7F4",
              color: "#000",
            }}
            onClick={() => showHistory(false)}
          >
            <Avatar
              src={BotAiImage}
              sx={{ width: "34px", height: "32px" }}
              variant="rounded"
            />
            New Chat
            <Avatar src={NewChatImage} sx={{ width: "24px", height: "24px" }} />
          </Button>
          <Button
            variant="contained"
            sx={{
              minWidth: "175px",
              height: "40px",
              fontWeight: "700",
              color: "#414146",
            }}
            onClick={() => showHistory(true)}
          >
            Saved Conversations
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
export default Sidebar;
