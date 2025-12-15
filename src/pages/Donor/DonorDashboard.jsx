import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
  Avatar,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const DonorDashboard = () => {
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
      <Grid container spacing={3} sx={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* PROFILE CARD */}
        <Grid item xs={12} md={4.5}>
          <Card sx={{ borderRadius: 3, boxShadow: 3, height: "100%" }}>
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
                  (DONOR)
                </Typography>
              </Box>

              <Box sx={{ lineHeight: 1.9 }}>
                <Typography><strong>First Name:</strong> Areeba</Typography>
                <Typography><strong>Last Name:</strong> Khalid</Typography>
                <Typography><strong>Gender:</strong> Female</Typography>
                <Typography><strong>DOB:</strong> 02-02-2000</Typography>
                <Typography><strong>Email:</strong> areebakhalid@gmail.com</Typography>
                <Typography><strong>Contact No:</strong> 03001234568</Typography>
                <Typography><strong>Address:</strong> House no xyz, Karachi</Typography>
                <Typography><strong>City:</strong> Karachi</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* DONATION SUMMARY */}
        <Grid item xs={12} md={7.5}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Donation Summary
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
                    <Typography fontWeight="bold">Total Donations</Typography>
                    <Typography variant="h6" mt={1}>5</Typography>
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
                    <Typography fontWeight="bold">Total Amount Donated</Typography>
                    <Typography variant="h6" mt={1}>PKR 5,000</Typography>
                  </Card>
                </Grid>
              </Grid>

              {/* RECENT DONATIONS */}
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Recent Donations
              </Typography>

              <Grid container spacing={3} mb={3}>
                {/* Donation 1 */}
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#fafafa",
                      borderRadius: 2,
                      border: "1px solid #eee",
                    }}
                  >
                    <Typography><strong>Date:</strong> 2025-05-19</Typography>
                    <Typography><strong>Amount:</strong> PKR 5,000</Typography>
                    <Typography><strong>Campaign:</strong> Education</Typography>
                    <Typography><strong>Status:</strong> Completed</Typography>
                  </Box>
                </Grid>

                {/* Donation 2 */}
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#fafafa",
                      borderRadius: 2,
                      border: "1px solid #eee",
                    }}
                  >
                    <Typography><strong>Date:</strong> 2025-08-20</Typography>
                    <Typography><strong>Amount:</strong> PKR 10,000</Typography>
                    <Typography><strong>Campaign:</strong> Health</Typography>
                    <Typography><strong>Status:</strong> Completed</Typography>
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

export default DonorDashboard;
