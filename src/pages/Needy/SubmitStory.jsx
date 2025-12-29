import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Grid,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
} from "@mui/material";

const steps = ["Personal Information", "Story Details", "Supporting Documents"];

const SubmitStory = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    storyDetails: "",
    files: [],
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: Array.from(e.target.files) });
  };

  // Validate current step when clicking Next/Submit
  const validateStep = (step) => {
    let tempErrors = {};

    if (step === 0) {
      if (!formData.firstName) tempErrors.firstName = "First Name is required";
      if (!formData.lastName) tempErrors.lastName = "Last Name is required";
      if (!formData.email) tempErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        tempErrors.email = "Email is invalid";
      if (!formData.dob) tempErrors.dob = "Date of Birth is required";
      if (!formData.gender) tempErrors.gender = "Gender is required";
      if (!formData.phone) tempErrors.phone = "Phone number is required";
      else if (!/^\d{10,15}$/.test(formData.phone))
        tempErrors.phone = "Phone number is invalid";
      if (!formData.address) tempErrors.address = "Address is required";
      if (!formData.city) tempErrors.city = "City is required";
    }

    if (step === 1) {
      const wordCount = formData.storyDetails.trim().split(/\s+/).filter(Boolean).length;
      if (!formData.storyDetails) tempErrors.storyDetails = "Story is required";
      else if (wordCount < 20)
        tempErrors.storyDetails = "Story must be at least 20 words";
    }

    if (step === 2) {
      if (!formData.files || formData.files.length === 0)
        tempErrors.files = "Please upload at least one document";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  // Submit handler with reset
  const handleSubmit = () => {
    if (validateStep(activeStep)) {
      console.log("Form Data Submitted:", formData);
      alert("Form submitted successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        storyDetails: "",
        files: [],
      });

      // Clear errors
      setErrors({});

      // Go back to first step
      setActiveStep(0);
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="First Name"
                name="firstName"
                fullWidth
                required
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Last Name"
                name="lastName"
                fullWidth
                required
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Date of Birth"
                name="dob"
                type="date"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                value={formData.dob}
                onChange={handleChange}
                error={!!errors.dob}
                helperText={errors.dob}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth error={!!errors.gender}>
                <Select
                  displayEmpty
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  renderValue={(selected) =>
                    selected ? selected : "Select Gender"
                  }
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
                <FormHelperText>{errors.gender}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Contact No"
                name="phone"
                type="tel"
                fullWidth
                required
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Address"
                name="address"
                fullWidth
                required
                value={formData.address}
                onChange={handleChange}
                error={!!errors.address}
                helperText={errors.address}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="City"
                name="city"
                fullWidth
                required
                value={formData.city}
                onChange={handleChange}
                error={!!errors.city}
                helperText={errors.city}
              />
            </Grid>
          </Grid>
        );

      case 1: {
        const wordCount = formData.storyDetails.trim().split(/\s+/).filter(Boolean).length;
        return (
          <TextField
            label="Write Your Story Here..."
            name="storyDetails"
            multiline
            rows={6}
            fullWidth
            required
            sx={{ mt: 2 }}
            value={formData.storyDetails}
            onChange={handleChange}
            error={!!errors.storyDetails}
            helperText={
              errors.storyDetails
                ? errors.storyDetails
                : `${wordCount} / 20 words`
            }
          />
        );
      }

      case 2:
        return (
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" component="label">
              Upload Supporting Documents
              <input
                type="file"
                hidden
                multiple
                onChange={handleFileChange}
              />
            </Button>
            {errors.files && (
              <Typography color="error" sx={{ mt: 1 }}>
                {errors.files}
              </Typography>
            )}
            {formData.files.length > 0 && (
              <Typography sx={{ mt: 1 }}>
                {formData.files.length} file(s) selected
              </Typography>
            )}
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "80%", margin: "auto", mt: 5, mb: 5 }}>
      <Typography
        variant="h4"
        sx={{ mb: 3, fontWeight: 700, textAlign: "center" }}
      >
        Story Submission Form
      </Typography>

      <Stepper activeStep={activeStep} alternativeLabel sx={{ mt: 3, mb: 3 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {renderStepContent(activeStep)}

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3, gap: 2 }}>
        {activeStep > 0 && (
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
        )}

        {activeStep < steps.length - 1 ? (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default SubmitStory;
