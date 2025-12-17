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
  MenuItem,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const NeedySignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    profession: "",
    otherProfession: "",
    address: "",
    city: "",
    password: "",
    confirmPassword: "",
    cnicImage: null,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [cnicPreview, setCnicPreview] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear field-specific error
  };

  const handleCnicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, cnicImage: file });
      setCnicPreview(URL.createObjectURL(file));
      setErrors({ ...errors, cnicImage: "" });
    }
  };

  const validate = () => {
    const tempErrors = {};
    const {
      firstName,
      lastName,
      email,
      dob,
      gender,
      profession,
      otherProfession,
      address,
      city,
      password,
      confirmPassword,
      cnicImage,
    } = formData;

    if (!firstName) tempErrors.firstName = "First Name is required";
    if (!lastName) tempErrors.lastName = "Last Name is required";
    if (!email) tempErrors.email = "Email is required";
    else if (!email.endsWith("@gmail.com")) tempErrors.email = "Email must be @gmail.com";
    if (!dob) tempErrors.dob = "Date of Birth is required";
    if (!gender) tempErrors.gender = "Gender is required";
    if (!profession) tempErrors.profession = "Profession is required";
    if (profession === "Other" && !otherProfession) tempErrors.otherProfession = "Please specify your profession";
    if (!address) tempErrors.address = "Address is required";
    if (!city) tempErrors.city = "City is required";
    if (!password) tempErrors.password = "Password is required";
    else if (password.length < 8) tempErrors.password = "Password must be at least 8 characters";
    if (!confirmPassword) tempErrors.confirmPassword = "Confirm Password is required";
    else if (password !== confirmPassword) tempErrors.confirmPassword = "Passwords do not match";
    if (!cnicImage) tempErrors.cnicImage = "CNIC image is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Signup successful!");
      // Call backend API here
      // On success → navigate to Needy Dashboard
      navigate("/needy/dashboard");
    }
  };

  return (
    <Box
      sx={{
        background: "#f0f4f8",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        overflow: "auto",
        marginTop: 6,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          mt: 7,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          𝐍𝐄𝐄𝐃𝐘 SIGNUP
        </Typography>

        <TextField
          label="First Name"
          name="firstName"
          fullWidth
          margin="normal"
          value={formData.firstName}
          onChange={handleChange}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName}
        />
        <TextField
          label="Last Name"
          name="lastName"
          fullWidth
          margin="normal"
          value={formData.lastName}
          onChange={handleChange}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          label="Date of Birth"
          name="dob"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={formData.dob}
          onChange={handleChange}
          error={Boolean(errors.dob)}
          helperText={errors.dob}
        />
        <TextField
          select
          label="Gender"
          name="gender"
          fullWidth
          margin="normal"
          value={formData.gender}
          onChange={handleChange}
          error={Boolean(errors.gender)}
          helperText={errors.gender}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </TextField>

        <TextField
          select
          label="Profession"
          name="profession"
          fullWidth
          margin="normal"
          value={formData.profession}
          onChange={handleChange}
          error={Boolean(errors.profession)}
          helperText={errors.profession}
        >
          <MenuItem value="Employed">Employed</MenuItem>
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Unemployed">Unemployed</MenuItem>
          <MenuItem value="Laborer">Laborer</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>

        {formData.profession === "Other" && (
          <TextField
            label="Please specify your profession"
            name="otherProfession"
            fullWidth
            margin="normal"
            value={formData.otherProfession}
            onChange={handleChange}
            error={Boolean(errors.otherProfession)}
            helperText={errors.otherProfession}
          />
        )}

        <TextField
          label="Address"
          name="address"
          fullWidth
          margin="normal"
          value={formData.address}
          onChange={handleChange}
          error={Boolean(errors.address)}
          helperText={errors.address}
        />
        <TextField
          label="City"
          name="city"
          fullWidth
          margin="normal"
          value={formData.city}
          onChange={handleChange}
          error={Boolean(errors.city)}
          helperText={errors.city}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Upload CNIC Image:
        </Typography>
        <Button variant="outlined" component="label" fullWidth sx={{ mt: 1 }}>
          Upload Picture
          <input type="file" accept="image/*" hidden onChange={handleCnicUpload} />
        </Button>
        {errors.cnicImage && (
          <Typography color="error" fontSize={14} sx={{ mt: 1 }}>
            {errors.cnicImage}
          </Typography>
        )}
        {cnicPreview && (
          <Box mt={1} textAlign="center">
            <Typography variant="caption" color="textSecondary">
              Image Preview:
            </Typography>
            <Box component="img" src={cnicPreview} alt="CNIC" sx={{ width: 120, mt: 1, borderRadius: 1 }} />
          </Box>
        )}

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
          value={formData.confirmPassword}
          onChange={handleChange}
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword}
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
          <span style={{ color: "#1976d2", cursor: "pointer" }} onClick={() => navigate("/login/needy")}>
            Login
          </span>
        </Typography>

        <Divider sx={{ my: 2 }}>Or</Divider>

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
          Signup with Facebook
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
          Signup with Google
        </Button>
      </Paper>
    </Box>
  );
};

export default NeedySignup;
