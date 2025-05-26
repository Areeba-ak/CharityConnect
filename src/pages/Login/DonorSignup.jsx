import React, { useState } from "react";
import { Box, TextField, Button,Typography,Paper,Divider,InputAdornment,IconButton,MenuItem,} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const DonorSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear errors on change
  };

  const handleSubmit = () => {
    const {
      firstName,
      lastName,
      email,
      dob,
      gender,
      address,
      city,
      password,
      confirmPassword,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !dob ||
      !gender ||
      !address ||
      !city ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    alert("Signup successful!");
  };

  const handleGoogleSignup = () => {
    alert("Redirecting to Google signup...");
  };

  const handleFacebookSignup = () => {
    alert("Redirecting to Facebook signup...");
  };

  return (
      <Box
        sx={{
          background: "#f0f4f8",
          minHeight: "100vh",
          display: "flex",
          marginTop: 6,
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          overflow: "auto",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: 420,
            marginTop: 7,
            p: 4,
            borderRadius: 3,
          }}
        >
        <Typography variant="h5" align="center" gutterBottom>
          𝐃𝐎𝐍𝐎𝐑 SIGNUP
        </Typography>

        <TextField
          label="First Name"
          name="firstName"
          fullWidth
          margin="normal"
          required
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          name="lastName"
          fullWidth
          margin="normal"
          required
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Date of Birth"
          name="dob"
          type="date"
          fullWidth
          margin="normal"
          required
          InputLabelProps={{ shrink: true }}
          value={formData.dob}
          onChange={handleChange}
        />
        <TextField
          select
          label="Gender"
          name="gender"
          fullWidth
          margin="normal"
          required
          value={formData.gender}
          onChange={handleChange}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </TextField>
        <TextField
          label="Address"
          name="address"
          fullWidth
          margin="normal"
          required
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
          label="City"
          name="city"
          fullWidth
          margin="normal"
          required
          value={formData.city}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          required
          value={formData.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type={showConfirm ? "text" : "password"}
          fullWidth
          margin="normal"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowConfirm(!showConfirm)}>
                  {showConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {error && (
          <Typography color="error" fontSize={14} sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, mb: 1, backgroundColor: "#479e43" }}
          onClick={handleSubmit}
        >
          Signup
        </Button>

        <Typography variant="body2" align="center" sx={{ mb: 1 }}>
          Already have an account?{" "}
          <span
            style={{ color: "#1976d2", cursor: "pointer" }}
            onClick={() => navigate("/login/donor")}
          >
            Login
          </span>
        </Typography>

        <Divider sx={{ my: 2 }}>Or</Divider>

        <Button
          onClick={handleFacebookSignup}
          fullWidth
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            textTransform: "none",
            border: "1px solid #ccc",
            gap: 1.5,
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
          startIcon={
            <img
              src={`${process.env.PUBLIC_URL}/assets/facebook.jpeg`}
              alt="Facebook"
              style={{ width: 24, height: 24 }}
            />
          }
        >
          Signup with Facebook
        </Button>

        <Button
          onClick={handleGoogleSignup}
          fullWidth
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            mt: 1.5,
            textTransform: "none",
            border: "1px solid #ccc",
            gap: 1.5,
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
          startIcon={
            <img
              src={`${process.env.PUBLIC_URL}/assets/google.jpeg`}
              alt="Google"
              style={{ width: 24, height: 24 }}
            />
          }
        >
          Signup with Google
        </Button>
      </Paper>
    </Box>
  );
};

export default DonorSignup;
