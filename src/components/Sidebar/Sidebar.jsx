import { Stack, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import NewChatImage from "../../assets/images/new-chat-image.png";
import BotAiImage from "../../assets/images/bot-ai-image.png";

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
      <Button
        sx={{
          fontSize: "1.2rem",
          gap: "10px",
          backgroundColor: "#D7C7F4",
          color: "#000",
        }}
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
      >
        Past Conversations
      </Button>
    </Stack>
  );
};

export default Sidebar;
