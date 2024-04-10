import { Box, Stack, Typography, TextField, Button, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import BotAiImage from "../../assets/images/bot-ai-image-profile.png";
import MessageField from "../MessageField/MessageField";

const Chat = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
      }}
      p={1}
    >
      <Typography
        variant="h4"
        color="primary.main"
        sx={{
          fontWeight: "700",
          padding: "10px",
          flex: 1,
        }}
      >
        Bot AI
      </Typography>

      <Stack
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{ minWidth: "100%", marginBottom: "100px" }}
      >
        <Typography variant="h4" sx={{ fontWeight: "500" }}>
          How Can I Help You Today?
        </Typography>
        <Avatar src={BotAiImage} sx={{ width: "66px", height: "69px" }} />
      </Stack>

      {/* <Grid
        container
        sx={{ rowGap: 2, columnGap: 1 }}
        my={5}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          sm={12}
          md={5.9}
          p={2}
          bgcolor="#fff"
          sx={{ borderRadius: "5px" }}
        >
          <Stack spacing={1}>
            <Typography variant="h6">Hi, how is the weather</Typography>
            <Typography variant="subtitle1">
              Get immediate AI generated response
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          sm={12}
          md={5.9}
          p={2}
          bgcolor="#fff"
          sx={{ borderRadius: "5px" }}
        >
          <Stack spacing={1}>
            <Typography variant="h6">Hi, what is my location</Typography>
            <Typography variant="subtitle1">
              Get immediate AI generated response
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          sm={12}
          md={5.9}
          p={2}
          bgcolor="#fff"
          sx={{ borderRadius: "5px" }}
        >
          <Stack spacing={1}>
            <Typography variant="h6">Hi, what is the temperature</Typography>
            <Typography variant="subtitle1">
              Get immediate AI generated response
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          sm={12}
          md={5.9}
          p={2}
          bgcolor="#fff"
          sx={{ borderRadius: "5px" }}
        >
          <Stack spacing={1}>
            <Typography variant="h6">Hi, how are you</Typography>
            <Typography variant="subtitle1">
              Get immediate AI generated response
            </Typography>
          </Stack>
        </Grid>
      </Grid> */}
      <Stack spacing={1}>
        <MessageField type="user" />
        <MessageField type="bot" />
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ marginTop: "10px" }}
      >
        <TextField
          type="text"
          multiline
          placeholder="Message BOTAI"
          sx={{
            width: "70vw",
            border: "1px solid #00000073",
            borderRadius: "5px",
          }}
        />
        <Stack direction="row" spacing={1} alignItems="end">
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
