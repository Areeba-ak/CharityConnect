import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
} from "@mui/material";

// Example stories submitted by the needy
const initialStories = [
  {
    id: 1,
    title: "Medical Aid for Ayesha",
    story:
      "My name is Anjum, and I am a widow raising three young children on my own. My youngest daughter, Ayesha, urgently needs a medical procedure that i simply cannot afford. Since my husband's passing, I have been struggling to cover basic needs, and now the thought of her undergoing surgery without proper support fills me with fear and anxiety.\n\n" +
      "I work multiple small jobs, but the income is never enough. I have tried everything possible to save for her treatment, but hospital bills and medications are far beyond my reach. Seeing her suffer breaks my heart, and I feel helpless knowing that without financial assistance, her health is at serious risk.\n\n" +
      "I am humbly reaching out for your help to provide Ayesha with the medical care she urgently needs. Any contribution, no matter how small, will make a huge difference in her life and give her the chance to recover and grow up healthy. Your support will bring hope and relief to my family.",
    date: "May 14, 2025",
    status: "Pending",
  },
  {
    id: 2,
    title: "School Supplies for Ahmed",
    story:
      "My name is Anjum, and I am raising three children alone after my husband passed away. My eldest son, Ahmed, loves going to school and is very eager to learn, but I cannot afford the necessary school supplies for him, such as books, uniforms, and stationery. Every day I worry about how he will continue his education without these basic essentials.\n\n" +
      "Despite working multiple small jobs, the income is barely enough to cover our basic needs. I want Ahmed to have the same opportunities as other children, to study comfortably, and to follow his dreams. The thought of him falling behind in school because we cannot provide these supplies breaks my heart.\n\n" +
      "I am humbly requesting support from kind donors to provide Ahmed with the school supplies he needs. Your help will ensure he can attend school with confidence, stay motivated, and continue to pursue his dreams. Every contribution will give my son a chance to have a brighter and more hopeful future.",
    date: "May 20, 2025",
    status: "Approved",
  },
];

const MyStories = () => {
  const [stories, setStories] = useState(initialStories);

  const handleEdit = (id) => {
    alert(`Edit story with ID: ${id}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this story?"
    );
    if (confirmDelete) {
      setStories(stories.filter((story) => story.id !== id));
    }
  };

  return (
    <Box sx={{ width: "100%", padding: { xs: 2, md: 0 } }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
        My Stories
      </Typography>

      {stories.length === 0 ? (
        <Typography variant="body1" sx={{ color: "gray" }}>
          You have not submitted any stories yet.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {stories.map((story) => (
            <Grid item xs={12} md={6} key={story.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {story.title}
                  </Typography>
                  <Divider sx={{ my: 1 }} />

                  {/* Bigger story content */}
                  <Typography
                    variant="body1"
                    sx={{ mb: 1, fontSize: "1rem", lineHeight: 1.6 }}
                  >
                    {story.story}
                  </Typography>

                  <Typography variant="body2">Date: {story.date}</Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: story.status === "Approved" ? "green" : "orange",
                      fontWeight: 600,
                    }}
                  >
                    Status: {story.status}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleEdit(story.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => handleDelete(story.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default MyStories;
