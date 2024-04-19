import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  Modal,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import FeedbackImage from "../../assets/images/feedback-image.png";

const Feedback = ({ open, onClose }) => {
  const [feedback, setFeedback] = useState("");
  const handleFeedback = (event) => {
    const msg = event.target.value;
    setFeedback(msg);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          // backgroundColor: rgba(249, 250, 250, 0.5),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            minWidth: "700px",
            backgroundColor: "rgba(250, 247, 255, 1)",
            boxShadow: "-4px 4px 10px 0px rgba(0, 0, 0, 0.25)",
            border: "1px solid rgba(0, 0, 0, 0.45)",
            borderRadius: "5px",
          }}
          p={3}
        >
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
            alignItems="end"
          >
            <Stack direction="row" spacing={1}>
              <Avatar
                src={FeedbackImage}
                sx={{ width: "40px", height: "42px" }}
              />
              <Typography variant="h6" sx={{ color: "#000" }}>
                Provide additional Feedback
              </Typography>
            </Stack>
            <Button
              sx={{ color: "#000", fontWeight: "500", fontSize: "1.2rem" }}
              onClick={onClose}
            >
              X
            </Button>
          </Stack>
          <TextField
            multiline
            minRows={5}
            value={feedback}
            onChange={handleFeedback}
          ></TextField>
          <Stack alignItems="end">
            <Button
              variant="contained"
              sx={{ maxWidth: "150px" }}
              onClick={() => onClose(feedback)}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default Feedback;
