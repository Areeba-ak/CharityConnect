import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Avatar,
  Button,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const NeedyDashboard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "50vh",
        padding: { xs: 2, md: 0 },
      }}
    >
      {/* Page Title */}
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
        Dashboard
      </Typography>

      {/* MAIN GRID */}
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* PROFILE CARD */}
        <Grid item xs={12} md={4.5}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              height: "100%",
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Your Profile
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                <Avatar sx={{ width: 90, height: 90, mb: 1, bgcolor: "#888" }}>
                  <PersonIcon sx={{ fontSize: 45 }} />
                </Avatar>
                <Typography variant="body2" color="text.secondary">
                  (NEEDY)
                </Typography>
              </Box>

              <Box sx={{ lineHeight: 1.9 }}>
                <Typography><strong>First Name:</strong> Anjum</Typography>
                <Typography><strong>Last Name:</strong> Khan</Typography>
                <Typography><strong>Gender:</strong> Female</Typography>
                <Typography><strong>DOB:</strong> 01-01-2000</Typography>
                <Typography><strong>Email:</strong> anjumkhan@gmail.com</Typography>
                <Typography><strong>Contact No:</strong> 03001234567</Typography>
                <Typography><strong>Address:</strong> House no 123, Karachi</Typography>
                <Typography><strong>City:</strong> Karachi</Typography>
                
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* STORY SUMMARY */}
        <Grid item xs={12} md={7.5}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Story Summary
              </Typography>
              <Divider sx={{ mb: 2 }} />

              {/* STAT CARDS */}
              <Grid container spacing={3} mb={3}>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      p: 2,
                      textAlign: "center",
                      borderRadius: 2,
                      background: "#f0f4ff",
                    }}
                  >
                    <Typography fontWeight="bold">Total Stories Submitted</Typography>
                    <Typography variant="h6" mt={1}>2</Typography>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      p: 2,
                      textAlign: "center",
                      borderRadius: 2,
                      background: "#fff8e1",
                    }}
                  >
                    <Typography fontWeight="bold">Verification Status</Typography>
                    <Typography variant="h6" mt={1}>Pending</Typography>
                  </Card>
                </Grid>
              </Grid>

              {/* RECENT STORY */}
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Recent Story Submission
              </Typography>

              <Grid container spacing={3} mb={3}>
                {/* Story 1 */}
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#fafafa",
                      borderRadius: 2,
                      border: "1px solid #eee",
                    }}
                  >
                    <Typography><strong>Title:</strong> Medical Aid for Ayesha</Typography>
                    <Typography><strong>Date:</strong> May 14, 2025</Typography>
                    <Typography><strong>Status:</strong> Pending</Typography>
                  </Box>
                </Grid>

                {/* Story 2 */}
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#fafafa",
                      borderRadius: 2,
                      border: "1px solid #eee",
                    }}
                  >
                    <Typography><strong>Title:</strong> School Supplies for Ahmed</Typography>
                    <Typography><strong>Date:</strong> May 20, 2025</Typography>
                    <Typography><strong>Status:</strong> Approved</Typography>
                  </Box>
                </Grid>
              </Grid>

              {/* Button */}
              <Box textAlign="center">
                <Button
                  variant="contained"
                  color="success"
                  sx={{ borderRadius: 2, px: 4 }}
                >
                  See More
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NeedyDashboard;
