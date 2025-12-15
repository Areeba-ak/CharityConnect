// ChatbotPage.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm the Charity Connect AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  const handleSend = () => {
    if (!input) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    if (input.toLowerCase().includes("donation process")) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            "To submit a donation request, you need to: 1. Create an account as a 'Donor'. 2. Provide required details and select payment method.",
        },
      ]);
    }

    setInput("");
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Box
      sx={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        mt: "100px", // push below header
        px: 2,
      }}
    >
      <Box sx={{ display: "flex", flex: 1 }}>
        {/* SIDEBAR */}
        <Box
          sx={{
            width: "280px",
            bgcolor: "#f2f4f7",
            p: 2,
            borderRadius: "12px",
            boxShadow: "0 3px 12px rgba(0,0,0,0.12)",
            border: "1px solid #d3d7dd",
            height: "440px",
            mr: 2,
            mt: 3,
          }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontWeight: 600, color: "#333" }}
          >
            Frequently Asked
          </Typography>

          <List sx={{ mb: 2 }}>
            {[
              "Donation process",
              "Story Submission Process",
              "Payment process",
            ].map((item, index) => (
              <ListItem
                button
                key={index}
                sx={{
                  borderRadius: "8px",
                  mb: 1,
                  "&:hover": { bgcolor: "#e6eef7" },
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontWeight: 600, color: "#333" }}
          >
            Recent Conversation
          </Typography>

          <List>
            {["Donation request help", "How to donate"].map((item, index) => (
              <ListItem
                button
                key={index}
                sx={{
                  borderRadius: "8px",
                  mb: 1,
                  "&:hover": { bgcolor: "#e6eef7" },
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Chat Panel */}
        <Box
          sx={{ flex: 1, p: 1.8, display: "flex", flexDirection: "column" }}
        >
          {/* Header with Logo */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <img
              src="/assets/chatbot.png"
              alt="Chatbot Logo"
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            <Typography variant="h6">
              CharityConnect AI Assistant
            </Typography>
          </Box>

          <Paper
            ref={chatContainerRef}
            sx={{
              flex: 1,
              p: 2,
              mb: 2,
              overflowY: "auto",
              maxHeight: "50vh",
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <Paper
                  sx={{
                    p: 1.5,
                    bgcolor: msg.sender === "user" ? "#4caf50" : "#e0e0e0",
                    color: msg.sender === "user" ? "#fff" : "#000",
                    maxWidth: "70%",
                  }}
                >
                  {msg.text}
                </Paper>
              </Box>
            ))}
          </Paper>

          {/* Input Field */}
          <Box sx={{ display: "flex" }}>
            <TextField
              fullWidth
              placeholder="Type your message here ..."
              variant="outlined"
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button
              onClick={handleSend}
              sx={{ ml: 1, bgcolor: "#6a1b9a", "&:hover": { bgcolor: "#4a146e" } }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              SEND
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatbotPage;
