import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const DonationPage = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [formValues, setFormValues] = useState({
    amount: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!formValues.amount) newErrors.amount = "Amount is required";
    if (!category) newErrors.category = "Category is required";
    if (!formValues.firstName) newErrors.firstName = "First Name is required";
    if (!formValues.lastName) newErrors.lastName = "Last Name is required";
    if (!formValues.email) newErrors.email = "Email is required";
    if (!formValues.phone) newErrors.phone = "Phone No is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/payment"); // <<---- GO TO PAYMENT PAGE
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4f6fa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3, textAlign: "center", letterSpacing: 1, mt: -8, color:"#0a5666"}}
      >
        DONATION
      </Typography>

      <Box
        sx={{
          width: 480,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 2,
          p: 4,
          pl: 7,
        }}
      >
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Enter Your Amount"
              variant="outlined"
              size="small"
              name="amount"
              value={formValues.amount}
              onChange={handleInputChange}
              error={!!errors.amount}
              helperText={errors.amount}
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl size="small" sx={{ minWidth: 220 }} error={!!errors.category}>
              <Select
                displayEmpty
                value={category}
                onChange={handleCategoryChange}
                renderValue={(selected) =>
                  selected ? selected : "Select Category"
                }
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                      overflowY: "auto",
                    },
                  },
                }}
              >
                <MenuItem value="education">Education</MenuItem>
                <MenuItem value="health">Health</MenuItem>
                <MenuItem value="women">Women Empowerment</MenuItem>
              </Select>
              {errors.category && (
                <FormHelperText>{errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>

        <Typography
          variant="subtitle1"
          sx={{ textAlign: "left", fontWeight: "bold", mb: 2, fontSize: "0.95rem" }}
        >
          YOUR INFORMATION
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              size="small"
              name="firstName"
              value={formValues.firstName}
              onChange={handleInputChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              size="small"
              name="lastName"
              value={formValues.lastName}
              onChange={handleInputChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              size="small"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Phone No"
              variant="outlined"
              size="small"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            width: 450,
            backgroundColor: "#2e7d32",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#1b5e20" },
          }}
          onClick={handleSubmit}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default DonationPage;
