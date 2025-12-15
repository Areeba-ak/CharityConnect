import React from "react";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f1f5f9",
        minHeight: "100vh",
        py: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ mb: 3, textAlign: "center", letterSpacing: 1, mt: -8, color:"#0a5666" }}
            >
        PAYMENT
      </Typography>

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
        <Typography sx={{ mb: 3, mt: 0 }} variant="subtitle1">
          How would you like to pay?
        </Typography>

        <Stack spacing={2}>
          <Button
            component={Link}
            to="/pay/credit"
            variant="outlined"
            sx={{
              justifyContent: "flex-start",
              borderRadius: 2,
              textTransform: "none",
              p: 2,
              borderWidth: 2,
            }}
          >
            <img
              src="/assets/creditcard.png"
              alt="Credit Card"
              style={{ width: 35, marginRight: 15 }}
            />
            Credit / Debit Card
          </Button>

          <Button
            component={Link}
            to="/pay/paypal"
            variant="outlined"
            sx={{
              justifyContent: "flex-start",
              borderRadius: 2,
              textTransform: "none",
              p: 2,
              borderWidth: 2,
            }}
          >
            <img
              src="/assets/paypal.png"
              alt="PayPal"
              style={{ width: 35, marginRight: 15 }}
            />
            Paypal
          </Button>

          <Button
            component={Link}
            to="/pay/stripe"
            variant="outlined"
            sx={{
              justifyContent: "flex-start",
              borderRadius: 2,
              textTransform: "none",
              p: 2,
              borderWidth: 2,
            }}
          >
            <img
              src="/assets/stripe.jpg"
              alt="Stripe"
              style={{ width: 35, marginRight: 15 }}
            />
            Stripe
          </Button>
        </Stack>

        <Typography variant="caption" sx={{ mt: 3, display: "block", textAlign: "center" }}>
          All Transactions are secure and encrypted
        </Typography>
      </Paper>
    </Box>
  );
};

export default PaymentPage;
