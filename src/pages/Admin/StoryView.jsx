import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Paper } from "@mui/material";
import OriginalStory from "./OriginalStory";
import AISummary from "./AISummary";

export default function StoryView() {
  const [tab, setTab] = useState(0);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
        View Story
      </Typography>

      <Paper sx={{ p: 2 }}>
        <Tabs value={tab} onChange={(e, v) => setTab(v)}>
          <Tab label="Original Story" />
          <Tab label="AI Summary" />
        </Tabs>

        <Box sx={{ mt: 3 }}>
          {tab === 0 && <OriginalStory />}
          {tab === 1 && <AISummary />}
        </Box>
      </Paper>
    </Box>
  );
}
