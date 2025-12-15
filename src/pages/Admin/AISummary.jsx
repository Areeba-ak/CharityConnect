import { Typography, Alert, Box } from "@mui/material";

export default function AISummary() {
  return (
    <Box>
      <Alert severity="info" sx={{ mb: 2 }}>
        AI Generated Summary
      </Alert>

      <Typography>
        A young child urgently needs medical treatment. Due to financial
        difficulties, her family is seeking donations to cover healthcare costs.
      </Typography>
    </Box>
  );
}
