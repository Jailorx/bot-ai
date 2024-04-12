import { Grid, Typography, Rating } from "@mui/material";
import UserProfile from "../../assets/images/user-image.png";
import AIProfile from "../../assets/images/bot-ai-image-profile.png";
import Avatar from "@mui/material/Avatar";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import { useState } from "react";

const MessageField = ({ type, message, onModalOpen }) => {
  const [showRating, setShowRating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={{
        bgcolor: (theme) =>
          type === "user"
            ? "rgba(215, 199, 244, 0.13)"
            : theme.palette.secondary.main,

        width: "100%",
        borderRadius: "5px",
        p: 2,
        mb: 1,
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
              10:02 PM
            </Typography>
          ) : (
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <Typography variant="subtitle2" color="rgba(0, 0, 0, 0.62)">
                  10:02 PM
                </Typography>
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
      </Grid>
    </Grid>
  );
};

export default MessageField;
