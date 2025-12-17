import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Divider,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const validate = () => {
    let tempErrors = {};

    if (!email) tempErrors.email = "Email is required";
    else if (!email.endsWith("@gmail.com"))
      tempErrors.email = "Email must be @gmail.com";

    if (!password) tempErrors.password = "Password is required";
    else if (password.length < 8)
      tempErrors.password = "Password must be at least 8 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      alert("Login successful!");
      // Backend authentication API call here
      // On success → redirect to Admin Dashboard
      // Example: window.location.href = "/admin/dashboard";
    }
  };

  return (
    <Box
      sx={{
        background: "#f0f4f8",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2
      }}
    >
      <Paper elevation={3} sx={{ width: 360, p: 4, mt: 6, borderRadius: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          𝐀𝐃𝐌𝐈𝐍 LOGIN
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={Boolean(errors.password)}
          helperText={errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Typography
          variant="body2"
          sx={{ textAlign: "right", mt: 1, color: "#1976d2", cursor: "pointer" }}
        >
          Forgot password?
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "#479e43", mt: 2, mb: 1 }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Divider sx={{ my: 2 }}>OR</Divider>

        <Button
          fullWidth
          component="a"
          href="https://www.facebook.com/login"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            textTransform: "none",
            border: "1px solid #ccc",
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          {
            <img
              src={`${process.env.PUBLIC_URL}/assets/facebook.jpeg`}
              alt="Google"
              style={{ width: 24, height: 24 }}
            />
          }
          Login with Facebook
        </Button>

        <Button
          fullWidth
          component="a"
          href="https://accounts.google.com/signin"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            mt: 1.5,
            textTransform: "none",
            border: "1px solid #ccc",
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          {
            <img
              src={`${process.env.PUBLIC_URL}/assets/google.jpeg`}
              alt="Google"
              style={{ width: 24, height: 24 }}
            />
          }
          Login with Google
        </Button>
      </Paper>
    </Box>
  );
};

export default AdminLogin;
