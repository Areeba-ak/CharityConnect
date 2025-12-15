import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";

const PaypalPayment = () => {
  const handlePayPalRedirect = () => {
    // DEMO — in real projects your backend generates PayPal token URL
    alert("Redirecting to PayPal (Demo)");
    // Example: window.location.href = "https://www.sandbox.paypal.com/checkoutnow?token=your_real_token";
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
        PAYPAL PAYMENT
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
          You will be redirected to PayPal’s secure checkout.
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#003087",
            py: 1.3,
            textTransform: "none",
            borderRadius: 2,
            "&:hover": { bgcolor: "#012a6c" },
          }}
          onClick={handlePayPalRedirect}
        >
          Continue to PayPal
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

export default PaypalPayment;
