import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {Box, Drawer, Avatar, Typography, List, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import {
  Dashboard as DashboardIcon,
  History as HistoryIcon,
  Edit as EditIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon
} from "@mui/icons-material";

const drawerWidth = 290;
const headerHeight = 100;

const menuItems = [
  { label: "Dashboard", path: "/DonorDashboard", icon: <DashboardIcon /> },
  { label: "Donation History", path: "/donor/history", icon: <HistoryIcon /> },
  { label: "Edit Profile", path: "/donor/edit-profile", icon: <EditIcon /> },
  { label: "Setting", path: "/donor/settings", icon: <SettingsIcon /> },
  { label: "Logout", path: "/donor/logout", icon: <LogoutIcon /> }
];

export default function DonorLayout() {
  const location = useLocation();

  const isActive = (path) => {
    if (
      (location.pathname === "/donor" || location.pathname === "/donor/") &&
      path === "/DonorDashboard"
    )
      return true;
    return location.pathname === path;
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#f7f7f7",
            borderRight: "1px solid rgba(0,0,0,0.08)",
            top: headerHeight,
            height: `calc(100% - ${headerHeight}px)`
          }
        }}
      >
        {/* Profile Info */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar
            src="/assets/user.png"
            alt="Donor"
            sx={{ width: 70, height: 70, bgcolor: "#e0e0e0" }}
          />
          <Typography sx={{ mt: 1, fontWeight: 700 }}>AREEBA KHALID</Typography>
          <Typography variant="caption">( DONOR )</Typography>
        </Box>

        <Divider />

        {/* Menu Items */}
        <List>
          {menuItems.map((item) => {
            const active = isActive(item.path);
            return (
              <ListItemButton
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  pl: 2.5,
                  pr: 2,
                  py: 1.25,
                  mb: 0.5,
                  backgroundColor: active ? "#deeddf" : "transparent",
                  borderLeft: active ? "5px solid #1a7e16" : "5px solid transparent",
                  "&:hover": { backgroundColor: active ? "#e7f6e8" : "#f2f4f7" },
                  color: "rgba(0,0,0,0.87)"
                }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#fafafa",
          p: 4,
          mt: `${headerHeight}px`
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
