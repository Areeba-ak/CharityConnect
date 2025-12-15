import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";

const StripePayment = () => {
  const handleStripeRedirect = () => {
    // DEMO REDIRECT — real app uses backend Stripe session
    window.location.href = "https://checkout.stripe.com/pay/demo_12345";
  };

  return (
    <Box
      sx={{
        bgcolor: "#f1f5f9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      {/* PAGE HEADING */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3, textAlign: "center", letterSpacing: 1, color: "#0a5666" }}
      >
        STRIPE PAYMENT
      </Typography>

      {/* WHITE BOX */}
      <Paper
        elevation={3}
        sx={{
          p: 5,
          width: "100%",
          maxWidth: 500,
          borderRadius: 3,
          textAlign: "left",
          bgcolor: "#fff",
        }}
      >
        <Typography variant="subtitle1" sx={{ mb: 3 }}>
          You will be redirected to Stripe’s secure payment page.
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#635bff",
            py: 1.3,
            textTransform: "none",
            borderRadius: 2,
            "&:hover": { bgcolor: "#4a43e0" },
          }}
          onClick={handleStripeRedirect}
        >
          Continue to Stripe
        </Button>

        <Typography
          variant="caption"
          sx={{ mt: 3, display: "block", textAlign: "center" }}
        >
          Your payment is secure & encrypted.
        </Typography>
      </Paper>
    </Box>
  );
};

export default StripePayment;
