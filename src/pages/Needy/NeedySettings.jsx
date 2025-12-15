import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Switch,
  FormControlLabel,
  Divider,
  Alert,
} from "@mui/material";

const NeedySettings = () => {
  const [settings, setSettings] = useState({
    emailNotifs: true,
    smsNotifs: false,
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleToggle = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.checked });
  };

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handlePasswordSave = () => {
    console.log("Password Updated:", settings);
  };

  const handleDelete = () => {
    alert("Account Deletion Requested");
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "50vh",
        padding: { xs: 2, md: 0 },
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
        Settings
      </Typography>

      <Grid container spacing={3}>
        {/* Notification Preferences */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 3,
              minHeight: 350,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Notification Preferences
              </Typography>

              <FormControlLabel
                control={
                  <Switch
                    checked={settings.emailNotifs}
                    onChange={handleToggle}
                    name="emailNotifs"
                  />
                }
                label="Email Notifications"
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={settings.smsNotifs}
                    onChange={handleToggle}
                    name="smsNotifs"
                  />
                }
                label="SMS Notifications"
              />

              <Divider sx={{ my: 2 }} />

              <Typography variant="body2" sx={{ color: "gray" }}>
                Manage how you want to receive updates about your stories,
                campaigns, and important announcements.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Change Password */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 3,
              minHeight: 350,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Change Password
            </Typography>

            <TextField
              label="Current Password"
              name="oldPassword"
              fullWidth
              type="password"
              sx={{ mb: 2 }}
              value={settings.oldPassword}
              onChange={handleChange}
            />

            <TextField
              label="New Password"
              name="newPassword"
              fullWidth
              type="password"
              sx={{ mb: 2 }}
              value={settings.newPassword}
              onChange={handleChange}
            />

            <TextField
              label="Confirm New Password"
              name="confirmPassword"
              fullWidth
              type="password"
              sx={{ mb: 2 }}
              value={settings.confirmPassword}
              onChange={handleChange}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: "auto", borderRadius: 2 }}
              onClick={handlePasswordSave}
            >
              Update Password
            </Button>
          </Box>
        </Grid>

        {/* Delete Account Section */}
        <Grid item xs={12}>
          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 3,
              minHeight: 200,
            }}
          >
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              Delete Account
            </Typography>

            <Alert severity="warning" sx={{ mb: 2 }}>
              This action is permanent. All your stories and account data will
              be removed.
            </Alert>

            <Button
              variant="contained"
              color="error"
              sx={{ borderRadius: 2 }}
              onClick={handleDelete}
            >
              Delete My Account
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NeedySettings;
