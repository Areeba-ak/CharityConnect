import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const donationData = [
  { date: "2025-05-19", campaign: "Education", amount: 5000, status: "Completed" },
  { date: "2025-08-20", campaign: "Health", amount: 10000, status: "Completed" },
  { date: "2025-09-15", campaign: "Food", amount: 3000, status: "Pending" },
  { date: "2025-10-01", campaign: "Medical", amount: 7000, status: "Completed" },
];

const DonationHistory = () => {
  const totalDonations = donationData.length;
  const totalAmount = donationData.reduce((sum, d) => sum + d.amount, 0);

  return (
    <Box sx={{ width: "100%",
        minHeight: "50vh",
        padding: { xs: 2, md: 0 }}}>
      {/* Page Title */}
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
        Donation History
      </Typography>

      {/* SUMMARY CARDS */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ p: 2, borderRadius: 2, textAlign: "center", background: "#f0f4ff" }}>
            <Typography fontWeight="bold">Total Donations</Typography>
            <Typography variant="h6" mt={1}>{totalDonations}</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card sx={{ p: 2, borderRadius: 2, textAlign: "center", background: "#fff8e1" }}>
            <Typography fontWeight="bold">Total Amount Donated</Typography>
            <Typography variant="h6" mt={1}>PKR {totalAmount.toLocaleString()}</Typography>
          </Card>
        </Grid>
      </Grid>

      {/* DONATION TABLE */}
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Donation Details
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Date</strong></TableCell>
                  <TableCell><strong>Campaign</strong></TableCell>
                  <TableCell><strong>Amount (PKR)</strong></TableCell>
                  <TableCell><strong>Status</strong></TableCell>
                  <TableCell><strong>Action</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {donationData.map((donation, index) => (
                  <TableRow key={index}>
                    <TableCell>{donation.date}</TableCell>
                    <TableCell>{donation.campaign}</TableCell>
                    <TableCell>{donation.amount.toLocaleString()}</TableCell>
                    <TableCell>{donation.status}</TableCell>
                    <TableCell>
                      {donation.status === "Pending" ? (
                        <Button size="small" variant="contained" color="primary">Cancel</Button>
                      ) : (
                        <Button size="small" variant="outlined" disabled>Completed</Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination / See More Button */}
          <Box textAlign="center" mt={3}>
            <Button variant="contained" color="success" sx={{ borderRadius: 2, px: 4 }}>
              See More
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DonationHistory;
