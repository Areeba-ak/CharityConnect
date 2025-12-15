import React from "react";
import {
  Typography,
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Grid,
  Avatar,
} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";

export default function ReportsFeedbacks() {
  // Sample KPI stats
  const kpis = [
    { title: "Total Reports", value: "15" },
    { title: "Positive Feedback", value: "78%" },
    { title: "Negative Feedback", value: "22%" },
  ];

  // Sample chart data
  const chartData = [
    { name: "Jan", reports: 3 },
    { name: "Feb", reports: 5 },
    { name: "Mar", reports: 4 },
    { name: "Apr", reports: 2 },
    { name: "May", reports: 1 },
  ];

  // Sample feedback data
  const feedbacks = [
    { id: 1, user: "John Doe", feedback: "Great platform! Very easy to use.", date: "2025-08-10" },
    { id: 2, user: "Areeba Khalid", feedback: "UI looks amazing and smooth.", date: "2025-08-11" },
    { id: 3, user: "Ali Raza", feedback: "Had a small issue but support was quick.", date: "2025-08-12" },
    { id: 4, user: "Sara Ahmed", feedback: "Would love to see more features.", date: "2025-08-13" },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
        Reports & Feedbacks
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 3, alignItems: "stretch" }}>
        {kpis.map((kpi, index) => (
          <Grid item xs={12} sm={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 2,
                textAlign: "center",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <CardContent>
                <Typography variant="h6">{kpi.title}</Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                  {kpi.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Reports Chart */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Monthly Reports Overview
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="reports" fill="#1976d2" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* Feedback Table */}
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 700,
            color: "#1a7e16",
          }}
        >
          Recent Feedbacks
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell sx={{ fontWeight: "bold" }}>User</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Feedback</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feedbacks.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#fafafa" : "white",
                    "&:hover": { backgroundColor: "#e3f2fd", cursor: "pointer" },
                  }}
                >
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Avatar sx={{ bgcolor: "#1976d2", width: 32, height: 32 }}>
                        <PersonIcon fontSize="small" />
                      </Avatar>
                      {row.user}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Paper
                      sx={{
                        p: 1,
                        backgroundColor: "#f9f9f9",
                        borderRadius: 2,
                        fontSize: "0.9rem",
                      }}
                    >
                      {row.feedback}
                    </Paper>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1} color="gray">
                      <EventIcon fontSize="small" /> {row.date}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
