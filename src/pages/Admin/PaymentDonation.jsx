import React from "react";
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from "@mui/material";

const tx = [
  { id: 1, donor: "Ahmed", to: "Ali Khan", amount: "PKR 20,000", date: "2025-07-01" },
  { id: 2, donor: "Sara", to: "Usman Raza", amount: "PKR 5,000", date: "2025-06-20" },
];

export default function PaymentDonation() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>Payment & Donation <Box component="span" sx={{ color: "gray" }}></Box></Typography>

      <Paper sx={{ p: 2 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Donor</TableCell>
                <TableCell>Recipient</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tx.map(t => (
                <TableRow key={t.id}>
                  <TableCell>{t.id}</TableCell>
                  <TableCell>{t.donor}</TableCell>
                  <TableCell>{t.to}</TableCell>
                  <TableCell>{t.amount}</TableCell>
                  <TableCell>{t.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
