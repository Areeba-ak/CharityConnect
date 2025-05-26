import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper, Divider, InputAdornment, IconButton} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom"; 

const DonorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); //  initialize

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const handleGoogleLogin = () => {
    alert("Redirecting to Google login...");
  };

  const handleFacebookLogin = () => {
    alert("Redirecting to Facebook login...");
  };

  return (
    <Box
      sx={{
        background: "#f0f4f8",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 360,
          p: 4,
          marginTop : 6,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          𝐍𝐄𝐄𝐃𝐘 LOGIN 
        </Typography>

        <TextField label="Email" fullWidth margin="normal" />

        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
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
           sx={{  backgroundColor: "#479e43", mt: 2, mb: 1 }}
         >
           Login
         </Button>

        <Typography variant="body2" align="center" sx={{ mb: 1 }}>
          Don't have an account?{" "}
          <span
            style={{ color: "#1976d2", cursor: "pointer" }}
            onClick={() => navigate("/needy/signup")} //  navigate to signup page 
          >
            Signup
          </span>
        </Typography>

        <Divider sx={{ my: 2 }}>OR</Divider>

        {/* Facebook Login */}
        <Button
          onClick={handleFacebookLogin}
          fullWidth
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            textTransform: "none",
            border: "1px solid #ccc",
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
          Login with Facebook
        </Button>

        {/* Google Login */}
        <Button
          onClick={handleGoogleLogin}
          fullWidth
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            mt: 1.5,
            textTransform: "none",
            border: "1px solid #ccc",
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
        Login with Google
        </Button>
      </Paper>
    </Box>
  );
};

export default DonorLogin;
