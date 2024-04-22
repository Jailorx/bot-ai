import { Box, Stack, Typography, TextField, Button, Grid } from "@mui/material";
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

  const handlePresetStatements = (event) => {
    console.log("in preset commands");
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
            <>
              <MessageField
                key={index}
                type={message.type}
                message={message.content}
                onModalOpen={handleOpenModal}
                feedback={feedback}
              />
              {message.type === "bot" && (
                <Feedback open={isModalOpen} onClose={handleCloseModal} />
              )}
            </>
          ))}
          <div ref={messagesEndRef} />
        </Stack>
      ) : (
        <>
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

          <Grid
            container
            sx={{ rowGap: 2, columnGap: 1 }}
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
                <Typography variant="h6">Hi, how is the weather</Typography>
                <Typography>Get immediate AI generated response</Typography>
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
                <Typography>Get immediate AI generated response</Typography>
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
                <Typography variant="h6">
                  Hi, what is the temperature
                </Typography>
                <Typography>Get immediate AI generated response</Typography>
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
                <Typography>Get immediate AI generated response</Typography>
              </Stack>
            </Grid>
          </Grid>
        </>
      )}
      <Grid
        container
        sx={{ columnGap: 2 }}
        justifyContent="center"
        alignItems="center"
        flexWrap="noWrap"
      >
        <Grid item xs={12} md={5}>
          <TextField
            type="text"
            multiline
            placeholder="Message BOT AI"
            sx={{
              minWidth: "40vw",
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
              minWidth: "74px",
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
              minWidth: "74px",
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
