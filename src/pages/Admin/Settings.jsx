import React, { useState } from "react";
import {
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  Avatar,
  FormGroup,
  FormControlLabel,
  Switch
} from "@mui/material";

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@example.com",
    avatar: "/assets/admin-avatar.png"
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false
  });

  // Handle text field changes for profile
  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle password field changes
  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  // Handle switch changes
  const handleNotificationChange = (e) => {
    setNotifications({ ...notifications, [e.target.name]: e.target.checked });
  };

  // Handle profile picture upload + preview
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileSubmit = () => {
    console.log("Updated Profile:", profile);
    alert("Profile updated successfully!");
  };

  const handlePasswordSubmit = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    console.log("Password Changed:", passwordData);
    alert("Password changed successfully!");
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
        Settings
      </Typography>

      {/* Profile Settings */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Profile Information
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar src={profile.avatar} sx={{ width: 70, height: 70, mr: 2 }} />
          <Button variant="outlined" component="label">
            Change Avatar
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleAvatarChange}
            />
          </Button>
        </Box>
        <TextField
          label="Full Name"
          name="name"
          value={profile.name}
          onChange={handleProfileChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          value={profile.email}
          onChange={handleProfileChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleProfileSubmit}>
          Save Profile
        </Button>
      </Paper>

      {/* Password Settings */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Change Password
        </Typography>
        <TextField
          label="Current Password"
          name="currentPassword"
          type="password"
          value={passwordData.currentPassword}
          onChange={handlePasswordChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="New Password"
          name="newPassword"
          type="password"
          value={passwordData.newPassword}
          onChange={handlePasswordChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Confirm New Password"
          name="confirmPassword"
          type="password"
          value={passwordData.confirmPassword}
          onChange={handlePasswordChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handlePasswordSubmit}>
          Update Password
        </Button>
      </Paper>

      {/* Notification Settings */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Notification Preferences
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={notifications.email}
                onChange={handleNotificationChange}
                name="email"
              />
            }
            label="Email Notifications"
          />
          <FormControlLabel
            control={
              <Switch
                checked={notifications.sms}
                onChange={handleNotificationChange}
                name="sms"
              />
            }
            label="SMS Notifications"
          />
        </FormGroup>
      </Paper>
    </Box>
  );
}
