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
import { useNavigate } from "react-router-dom";

const NeedyLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.email) tempErrors.email = "Email is required";
    else if (!formData.email.endsWith("@gmail.com")) {
      tempErrors.email = "Email must be in @gmail.com format";
    }

    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      // Call backend API here
      // On success → redirect to Needy Dashboard
      navigate("/needy/dashboard");
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
        padding: 2,
      }}
    >
      <Paper elevation={3} sx={{ width: 360, p: 4, mt: 6, borderRadius: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          𝐍𝐄𝐄𝐃𝐘 LOGIN
        </Typography>

        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <TextField
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
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

        <Typography variant="body2" align="center" sx={{ mb: 1 }}>
          Don't have an account?{" "}
          <span
            style={{ color: "#1976d2", cursor: "pointer" }}
            onClick={() => navigate("/needy/signup")}
          >
            Signup
          </span>
        </Typography>

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

export default NeedyLogin;
