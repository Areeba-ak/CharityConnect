import React, { useState } from "react";
import {
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const NewsStories = () => {
  const stories = [
    {
      title: "Kausar – Rebuilding lives",
      text: "My name is Kausar and I live in Yousuf Goth, Surjani Town with my three children. Every year during heavy rains, our area gets flooded badly.",
      img: "kausar.jpg",
      category: "women",
    },
    {
      title: "Shamshad Bibi",
      text: "My name is Shamshad Bibi, and I am a mother of four living in my village. I was raised believing that a woman’s role is limited to her home, ",
      img: "homebased.jpg",
      category: "women",
    },
    {
      title: "Humaira Bachal ",
      text: "I am Humaira Bachal, and I come from a community where girls are often discouraged from getting an education.",
      img: "humaira.jpg",
      category: "education",
    },
    {
      title: "Rebuilding Farhan’s Life",
      text: "My name is Farhan, and I live in Liaquatabad. A devastating fire destroyed my small shop, which was the only source of income for my family.",
      img: "farhan.jpg",
      category: "health",
    },
  ];

  const [category, setCategory] = useState("");

  const filteredStories =
    category === "" ? stories : stories.filter((s) => s.category === category);

  return (
    <>
      {/* Top Header */}
      <Box
        sx={{
          pt: 13,
          pb: 2,
          backgroundColor: "#f0f4f8",
          width: "calc(95% + 80px)",
          margin: "0 auto",
        }}
      >
        <Paper
          elevation={2}
          sx={{
            textAlign: "center",
            py: 4,
            px: 2,
            width: "100%",
            borderRadius: 0,
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            color="#0a5666"
          >
            NEWS AND STORIES
          </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
            Inspiring Journeys ( Stories That Touch the Heart )
          </Typography>
        </Paper>
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          py: 5,
          backgroundColor: "#f0f4f8",
          width: "calc(95% + 80px)",
          margin: "0 auto",
        }}
      >
        <Container maxWidth="lg">
          {/* Subheading + Dropdown */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              mb: 5,
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography
              sx={{
                color: "green",
                fontWeight: "600",
                fontSize: { xs: "18px", md: "22px" },
                mb: { xs: 2, md: 0 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Real Stories, Real Impact: See the Change
            </Typography>

            <FormControl size="small" sx={{ minWidth: 280 }}>
              <Select
                displayEmpty
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                renderValue={(selected) =>
                  selected ? selected : "Select Category"
                }
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="education">Education</MenuItem>
                <MenuItem value="health">Health</MenuItem>
                <MenuItem value="women">Women Empowerment</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* All Stories Heading */}
          <Box sx={{ textAlign: "center", py: 6 }}>
            <Typography variant="h5" color="#0a5666" fontWeight="bold">
              COMPLETED STORIES
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                px: 4,
                flexWrap: "wrap",
                mt: 4,
              }}
            >
              {filteredStories.map((story, idx) => (
              <Paper
                key={idx}
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: 360,
                  height: 180,
                  p: 2,
                  textAlign: "left",
                  overflow: "hidden",
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={`/assets/${story.img}`}
                  alt={story.title}
                  sx={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    borderRadius: 1,
                    mr: 2,
                    flexShrink: 0,
                  }}
                />
                <Box sx={{ overflow: "hidden", flex: 1 }}>
                  <Typography
                    fontWeight="bold"
                    variant="subtitle1"
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {story.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    mt={1}
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {story.text}
                  </Typography>
                  <Button
                      component={Link}
                      to={`/story/${idx}`}
                      size="small"
                      variant="text"
                      sx={{
                        mt: 1,
                        fontWeight: "bold",
                        p: 0,
                        color: "#1a7e16", 
                        "&:hover": {
                          backgroundColor: "transparent", 
                          color: "#0f490d", 
                        },
                      }}
                    >
                      Read More
                    </Button>
                </Box>
              </Paper>
            ))}

            </Box>
          </Box>
            
          {/* In-Progress Stories Heading */}
          <Box sx={{ textAlign: "center", py: 6 }}>
            <Typography variant="h5" color="#0a5666" fontWeight="bold">
              INPROGRESS STORIES
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                px: 4,
                flexWrap: "wrap",
                mt: 4,
              }}
            >
              {[
  {
    title: "Medical Aid for Ayesha",
    text: "My name is Anjum, and I am a widow raising three young children on my own. My youngest daughter, Ayesha, urgently needs a medical procedure that I simply cannot afford...",
    img: "medical.avif", // you will add image
  },
].map((story, idx) => (
  <Paper
    key={idx}
    elevation={3}
    sx={{
      display: "flex",
      flexDirection: "row",
      width: 360,
      height: 180,
      p: 2,
      textAlign: "left",
      overflow: "hidden",
      boxSizing: "border-box",
    }}
  >
    {/* LEFT IMAGE */}
    <Box
      component="img"
      src={`/assets/${story.img}`}
      alt={story.title}
      sx={{
        width: 100,
        height: 100,
        objectFit: "cover",
        borderRadius: 1,
        mr: 2,
        flexShrink: 0,
      }}
    />

    {/* RIGHT TEXT */}
    <Box sx={{ overflow: "hidden", flex: 1 }}>
      <Typography
        fontWeight="bold"
        variant="subtitle1"
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {story.title}
      </Typography>

      <Typography
        variant="body2"
        mt={1}
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {story.text}
      </Typography>

      <Button
        component={Link}
        to={`/story/inprogress/${idx}`}
        size="small"
        variant="text"
        sx={{
          mt: 1,
          fontWeight: "bold",
          p: 0,
          color: "#1a7e16",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#0f490d",
          },
        }}
      >
        Read More
      </Button>
    </Box>
  </Paper>
))}

            </Box>
          </Box>
          
        </Container>
      </Box>
    </>
  );
};

export default NewsStories;
