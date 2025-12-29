import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Chip,
  LinearProgress,
  Button,
} from "@mui/material";

const inProgressStories = [
  {
    title: "Medical Aid for Ayesha",
    status: "pending",
    category: "health", 
    text: [
      "My name is Anjum, and I am a widow raising three young children on my own. My youngest daughter, Ayesha, urgently needs a medical procedure that I simply cannot afford. Since my husband's passing, I have been struggling to cover basic needs. I work multiple small jobs, but the income is never enough. Hospital bills and medications are far beyond my reach. Seeing her suffer breaks my heart. Any contribution will help provide Ayesha with the medical care she urgently needs and give her a chance to grow up healthy. Your support can truly change our lives.",
    ],
    img: "medical.avif",
  },
];

const InProgressStoryDetails = () => {
  const { id } = useParams();
  const story = inProgressStories[id];
  const navigate = useNavigate();

  if (!story) return <Typography>Story not found</Typography>;

  const handleDonateClick = () => {
    navigate("/donate", {
      state: {
        storyId: id,
        title: story.title,
        category: story.category,
      },
    });
  };

  return (
    <Box sx={{ px: 4, pb: 4, mt: 12 }}>
      {/* Status Bar (Pending) */}
      <Box sx={{ mb: 5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1.5,
            mt: 16,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Story Status
          </Typography>
          <Chip label="Pending" color="warning" sx={{ fontWeight: "bold" }} />
        </Box>
        <LinearProgress
          variant="determinate"
          value={45} 
          sx={{
            height: 10,
            borderRadius: 5,
          }}
        />
      </Box>

      {/* Title */}
      <Typography variant="h3" fontWeight="bold" mb={4}>
        {story.title}
      </Typography>

      {/* Text + Image */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
        }}
      >
        <Box sx={{ flex: 1 }}>
          {story.text.map((para, index) => (
            <Typography
              key={index}
              paragraph
              sx={{ fontSize: "1.05rem", lineHeight: 1.9 }}
            >
              {para}
            </Typography>
          ))}
        </Box>

        <Box
          component="img"
          src={`/assets/${story.img}`}
          alt={story.title}
          sx={{
            width: { xs: "300%", md: 500, paddingRight: 100 },
            height: 300,
            objectFit: "cover",
            borderRadius: 2,
            flexShrink: 0,
          }}
        />
      </Box>

      {/* Donate Button */}
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          
          onClick={handleDonateClick}
        >
          Donate Now
        </Button>
      </Box>
    </Box>
  );
};

export default InProgressStoryDetails;
