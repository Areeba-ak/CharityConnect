import React from "react";
import {
  Grid, Card, CardContent, Typography, Paper, Box, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody
} from "@mui/material";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, Legend, PieChart, Pie, Cell } from "recharts";

const kpis = [
  { label: "Total Donations", value: "PKR 1,200,000", color: "#1976d2" },
  { label: "Active Stories", value: "35", color: "#388e3c" },
  { label: "Pending Verifications", value: "8", color: "#f57c00" },
];

const donationData = [
  { month: "Jan", amount: 80000 },
  { month: "Feb", amount: 120000 },
  { month: "Mar", amount: 95000 },
  { month: "Apr", amount: 150000 },
  { month: "May", amount: 170000 },
];

const userDistribution = [
  { name: "Donors", value: 150 },
  { name: "Needy", value: 85 },
];
const pieColors = ["#1976d2", "#ff9800"];

const queueData = [
  { id: 1, name: "Ali Khan", story: "Medical Emergency", date: "2025-05-15" },
  { id: 2, name: "Sara Ahmed", story: "Food Support", date: "2025-05-14" },
  { id: 3, name: "Usman Raza", story: "Education Fund", date: "2025-05-13" },
];

const recentActivities = [
  "Donor Ahmed donated PKR 20,000 to Ali Khan",
  "New story submitted by Sara Ahmed",
  "Needy user Usman Raza registered",
];

export default function adminDashboard() {
  return (
    <Box > 
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>Dashboard <Box component="span" sx={{ color: "gray" }}></Box></Typography>
      <Grid container spacing={4} sx={{ mb: 2 }}>
        {kpis.map((k, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: k.color, color: "#fff" }}>
              <CardContent>
                <Typography variant="subtitle2">{k.label}</Typography>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>{k.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Recent Activities</Typography>
            <Divider sx={{ my: 1 }} />
            {recentActivities.map((r, idx) => <Typography key={idx} variant="body2" sx={{ mb: 0.6 }}>• {r}</Typography>)}
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Monthly Donations (PKR)</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={donationData}>
                <XAxis dataKey="month" />
                <YAxis />
                <RechartsTooltip />
                <Legend />
                <Bar dataKey="amount" fill="#1976d2" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>User Distribution</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={userDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {userDistribution.map((entry, i) => <Cell key={i} fill={pieColors[i % pieColors.length]} />)}
                </Pie>
                <RechartsTooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8} sx={{ mt: 2 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Story Verification Queue</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Story</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {queueData.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell>{r.id}</TableCell>
                      <TableCell>{r.name}</TableCell>
                      <TableCell>{r.story}</TableCell>
                      <TableCell>{r.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
