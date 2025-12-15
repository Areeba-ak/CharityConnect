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
  InputLabel,
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
    maritalStatus: "",
    storyDetails: "",
  });

  const [category, setCategory] = useState("");

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => console.log("Form Data Submitted:", formData);

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
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                required
                placeholder="@gmail.com"
                value={formData.email}
                onChange={handleChange}
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
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="medium ">
                  <Select
                    displayEmpty
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    renderValue={(selected) =>
                      selected ? selected : "Select Gender"
                    }
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
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
              />
            </Grid>

          </Grid>
        );

      case 1:
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
          />
        );

      case 2:
        return (
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" component="label">
              Upload Supporting Documents
              <input type="file" hidden multiple />
            </Button>
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
