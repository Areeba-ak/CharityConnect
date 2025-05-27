import React from "react";
import {Box, Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, Drawer, TableHead, TableRow, Card,
  CardContent, Divider,Avatar, List,ListItem,ListItemIcon,ListItemText,} from "@mui/material";
import { Dashboard as DashboardIcon, Feed as FeedIcon, Group as GroupIcon, Payment as PaymentIcon, Assessment as AssessmentIcon, Settings as SettingsIcon, Logout as LogoutIcon } from "@mui/icons-material";
import {BarChart,Bar,XAxis,YAxis,Tooltip as RechartsTooltip,PieChart,Pie,Cell,ResponsiveContainer,Legend,} from "recharts";

const AdminDashboard = () => {
  const drawerWidth = 290;

  const kpis = [
    { label: "Total Donations", value: "PKR 1,200,000", color: "#1976d2" },
    { label: "Active Stories", value: "35", color: "#388e3c" },
    { label: "Pending Verifications", value: "8", color: "#f57c00" },
  ];

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

  return (
    <Box sx={{ display: "flex", marginTop: 12 }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: 12,
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            marginTop: 3,
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 70, height: 70 }} />
          <Typography variant="subtitle1" fontWeight="bold" fontSize="23" mt={1}>
            ADMIN
          </Typography>
        </Box>
        <List>
          <ListItem button><ListItemIcon><DashboardIcon /></ListItemIcon><ListItemText primary="Dashboard" /></ListItem>
          <ListItem button><ListItemIcon><FeedIcon /></ListItemIcon><ListItemText primary="Story Management" /></ListItem>
          <ListItem button><ListItemIcon><GroupIcon /></ListItemIcon><ListItemText primary="User Management" /></ListItem>
          <ListItem button><ListItemIcon><PaymentIcon /></ListItemIcon><ListItemText primary="Payment & Donation" /></ListItem>
          <ListItem button><ListItemIcon><AssessmentIcon /></ListItemIcon><ListItemText primary="Reports & Feedbacks" /></ListItem>
          <ListItem button><ListItemIcon><SettingsIcon /></ListItemIcon><ListItemText primary="Settings" /></ListItem>
          <ListItem button><ListItemIcon><LogoutIcon /></ListItemIcon><ListItemText primary="Logout" /></ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
          Dashboard
        </Typography>

        {/* KPI Cards */}
        <Grid container spacing={5} sx={{ mb: 1 }}>
          {kpis.map((kpi, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: kpi.color, color: "white" }}>
                <CardContent>
                  <Typography variant="subtitle1">{kpi.label}</Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {kpi.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        

        <Grid item xs={12} md={16}>
            <Paper elevation={3}>
              <Box p={1.5} sx={{ minHeight: '100px' }}>
                <Typography variant="h7" fontWeight="bold" gutterBottom>
                  Recent Activities
                </Typography>
                <Divider sx={{ mb: 1 }} />
                {recentActivities.map((activity, index) => (
                  <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                    • {activity}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </Grid>
          </Grid>

        {/* Graphs */}
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Monthly Donations (PKR)
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={donationData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <RechartsTooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#1976d2" />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  User Distribution
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userDistribution}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {userDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>

          {/* Verification Queue */}
        <Grid container spacing={3} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6} sx={{ mt: 3 }}>
              <Paper elevation={3}>
                <Box p={2}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Story Verification Queue
                  </Typography>
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
                        {queueData.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.story}</TableCell>
                            <TableCell>{item.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Paper>
            </Grid>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
};

export default AdminDashboard;