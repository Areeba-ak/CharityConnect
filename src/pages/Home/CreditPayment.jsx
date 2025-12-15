import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper, Stack } from "@mui/material";

const CreditPayment = () => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // Remove error as user types
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handlePay = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Card holder name is required";
    if (!form.number) newErrors.number = "Card number is required";
    if (!form.expiry) newErrors.expiry = "Expiry date is required";
    if (!form.cvv) newErrors.cvv = "CVV is required";

    setErrors(newErrors);

    // If there are errors, do NOT process
    if (Object.keys(newErrors).length > 0) return;

    alert("Payment processed successfully! (Demo)");
  };

  return (
    <Box
      sx={{
        bgcolor: "#f1f5f9",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 450,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, textAlign: "center", color:"#0a5666" }}>
          Credit / Debit Card Payment
        </Typography>

        <Stack spacing={2}>
          {/* Name */}
          <TextField
            label="Card Holder Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            error={!!errors.name}
            helperText={errors.name}
          />

          {/* Card Number */}
          <TextField
            label="Card Number"
            name="number"
            value={form.number}
            onChange={(e) => {
                const val = e.target.value;

                // Allow only digits
                if (/^[0-9]*$/.test(val)) {
                setForm({ ...form, number: val });
                setErrors({ ...errors, number: "" });
                }
            }}
            inputProps={{
                maxLength: 16, // prevent longer numbers
            }}
            fullWidth
            error={!!errors.number}
            helperText={errors.number}
            />

          {/* Expiry */}
          <TextField
            label="Expiry Date (MM/YY)"
            name="expiry"
            value={form.expiry}
            onChange={handleChange}
            fullWidth
            error={!!errors.expiry}
            helperText={errors.expiry}
          />

          {/* CVV */}
          <TextField
            label="CVV"
            name="cvv"
            value={form.cvv}
            onChange={handleChange}
            fullWidth
            error={!!errors.cvv}
            helperText={errors.cvv}
          />

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
          onClick={handlePay}
          >
            Pay Now 
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default CreditPayment;
