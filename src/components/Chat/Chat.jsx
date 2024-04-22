import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import BotAiImage from "../../assets/images/bot-ai-image-profile.png";
import MessageField from "../MessageField/MessageField";
import { useState, useEffect, useRef, useCallback } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
import Feedback from "../Feedback/Feedback";

const API_KEY = import.meta.env.VITE_AI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const Chat = () => {
  const model = genAI.getGenerativeModel({
    model: import.meta.env.VITE_AI_MODEL,
  });

  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const isSmallScreens = useMediaQuery("(max-width:600px)");

  const handlePresetStatements = (event) => {
    const target = event.target;
    if (target.tagName === "H6") {
      const text = target.innerText;
      setMessage(text);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = (feedback) => {
    setFeedback(feedback);
    setIsModalOpen(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [allMessages]);

  const handleUserMessage = (event) => {
    const msg = event.target.value;
    setMessage(msg);
  };

  const sendMessage = async () => {
    if (message.trim() === "") return;
    setAllMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", content: message },
    ]);
    setMessage("");

    const result = await model.generateContent(message);
    const response = await result.response.text();

    setAllMessages((prevMessages) => [
      ...prevMessages,
      { type: "bot", content: response },
    ]);

    console.log(allMessages);
  };

  const saveConversation = () => {
    localStorage.setItem("chat", JSON.stringify(allMessages));
    setAllMessages([]);
  };

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        sendMessage();
      }
    },
    [sendMessage]
  );

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
      {allMessages.length > 0 ? (
        <Stack spacing={1} sx={{ maxHeight: "80vh", overflowY: "scroll" }}>
          {allMessages.map((message, index) => (
            <Box key={index}>
              <MessageField
                type={message.type}
                message={message.content}
                onModalOpen={handleOpenModal}
                feedback={feedback}
              />
              {message.type === "bot" && (
                <Feedback open={isModalOpen} onClose={handleCloseModal} />
              )}
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Stack>
      ) : (
        <>
          <Stack
            spacing={1}
            justifyContent="center"
            alignItems="center"
            sx={{
              minWidth: "100%",
              marginBottom: "100px",
            }}
          >
            <Typography
              variant={isSmallScreens ? "h6" : "h5"}
              sx={{ fontWeight: "500" }}
            >
              How Can I Help You Today?
            </Typography>
            <Avatar
              src={BotAiImage}
              sx={{
                width: isSmallScreens ? "40px" : "66px",
                height: isSmallScreens ? "40px" : "69px",
              }}
            />
          </Stack>

          <Grid
            container
            sx={{ rowGap: 1, columnGap: 2 }}
            my={5}
            justifyContent="center"
            alignItems="center"
            onClick={handlePresetStatements}
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
                <Typography variant={isSmallScreens ? "subtitle1" : "h6"}>
                  Hi, how is the weather
                </Typography>
                <Typography variant={isSmallScreens ? "subtitle2" : ""}>
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
                <Typography variant={isSmallScreens ? "subtitle1" : "h6"}>
                  Hi, what is my location
                </Typography>
                <Typography variant={isSmallScreens ? "subtitle2" : ""}>
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
                <Typography variant={isSmallScreens ? "subtitle1" : "h6"}>
                  Hi, what is the temperature
                </Typography>
                <Typography variant={isSmallScreens ? "subtitle2" : ""}>
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
                <Typography variant={isSmallScreens ? "subtitle1" : "h6"}>
                  Hi, how are you
                </Typography>
                <Typography variant={isSmallScreens ? "subtitle2" : ""}>
                  Get immediate AI generated response
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </>
      )}
      <Grid
        container
        sx={{ columnGap: 2, rowGap: 1 }}
        direction={isSmallScreens ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
        flexWrap="noWrap"
        m={1}
      >
        <Grid item xs={12} md={5}>
          <TextField
            type="text"
            multiline
            placeholder="Message BOT AI"
            sx={{
              minWidth: isSmallScreens ? "70vw" : "40vw",
              border: "1px solid #00000073",
              borderRadius: "5px",
            }}
            value={message}
            onChange={handleUserMessage}
            onKeyPress={handleKeyPress}
          />
        </Grid>
        <Grid item>
          <Button
            fullWidth
            sx={{
              backgroundColor: "secondary.main",
              color: "#000",
              minWidth: isSmallScreens ? "200px" : "74px",
              height: "50px",
            }}
            onClick={sendMessage}
          >
            Ask
          </Button>
        </Grid>
        <Grid item>
          <Button
            fullWidth
            sx={{
              backgroundColor: "secondary.main",
              color: "#000",
              minWidth: isSmallScreens ? "200px" : "74px",
              height: "50px",
            }}
            onClick={saveConversation}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
