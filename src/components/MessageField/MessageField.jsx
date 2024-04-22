import { Grid, Typography, Rating } from "@mui/material";
import UserProfile from "../../assets/images/user-image.png";
import AIProfile from "../../assets/images/bot-ai-image-profile.png";
import Avatar from "@mui/material/Avatar";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import { useState } from "react";

const MessageField = ({ type, message, onModalOpen, feedback }) => {
  const [showRating, setShowRating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const getCurrentTime = () => {
    const curr = new Date();

    const hours = addZero(curr.getHours());
    const mins = addZero(curr.getMinutes());

    return `${hours}:${mins}`;
  };

  const addZero = (n) => {
    return n < 10 ? `0${n}` : n;
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        bgcolor: (theme) =>
          type === "user"
            ? "rgba(215, 199, 244, 0.13)"
            : theme.palette.secondary.main,

        width: "100%",
        borderRadius: "5px",
        p: 1,
        mb: 1,
        rowGap: 2,
        columnGap: 2,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Grid item>
        <Avatar
          src={type === "user" ? UserProfile : AIProfile}
          sx={{ width: "66px", height: "69px" }}
        />
      </Grid>
      <Grid item xs={8}>
        <Grid container direction="column">
          <Typography variant="h6">
            {type === "user" ? "You" : "AIBOT"}
          </Typography>
          <Typography variant="subtitle1">{message}</Typography>
          {type == "user" ? (
            <Typography variant="subtitle2" color="rgba(0, 0, 0, 0.62)">
              {getCurrentTime()}
            </Typography>
          ) : (
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="rgba(0, 0, 0, 0.62)"
                ></Typography>
              </Grid>
              <Grid item>
                <ThumbUpOffAltOutlinedIcon
                  style={{
                    color: "rgba(0, 0, 0, 0.4)",
                    opacity: isHovering ? 1 : 0,
                    transition: "opacity 0.3s",
                  }}
                  onClick={() => setShowRating(true)}
                />
              </Grid>
              <Grid item>
                <ThumbDownOffAltOutlinedIcon
                  style={{
                    color: "rgba(0, 0, 0, 0.4)",
                    opacity: isHovering ? 1 : 0,
                    transition: "opacity 0.3s",
                  }}
                  onClick={onModalOpen}
                />
              </Grid>
            </Grid>
          )}
        </Grid>
        {showRating && <Rating />}
        {feedback && (
          <Grid container direction="row">
            <Typography variant="subtitle2" color="rgba(0, 0, 0, 0.62)">
              <b>Feedback : </b>
            </Typography>
            <Typography variant="subtitle2" color="rgba(0, 0, 0, 0.62)">
              {feedback}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default MessageField;
