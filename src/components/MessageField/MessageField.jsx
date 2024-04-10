import { Stack, Typography } from "@mui/material";
import UserProfile from "../../assets/images/user-image.png";
import AIProfile from "../../assets/images/bot-ai-image-profile.png";
import Avatar from "@mui/material/Avatar";

const MessageField = ({ type }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        // bgcolor: " rgba(215, 199, 244, 0.13)",
        bgcolor: "red",
        width: "100%",
        maxHeight: "100px",
        border: "1px solid primary.main",
        borderRadius: "5px",
      }}
      p={2}
    >
      {type === "user" ? (
        <>
          <Avatar src={UserProfile} sx={{ width: "66px", height: "69px" }} />
          <Stack>
            <Typography variant="h6">You</Typography>
            <Typography variant="subtitle1">Hello, how are you?</Typography>
            <Typography variant="subtitle2" color=" rgba(0, 0, 0, 0.62)">
              10:30 AM
            </Typography>
          </Stack>
        </>
      ) : (
        <>
          <Avatar src={AIProfile} sx={{ width: "66px", height: "69px" }} />
          <Stack>
            <Typography variant="h6">AIBOT</Typography>
            <Typography variant="subtitle1">Iam Fine, Thankyou</Typography>
            <Typography variant="subtitle2" color=" rgba(0, 0, 0, 0.62)">
              10:30 AM
            </Typography>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default MessageField;
