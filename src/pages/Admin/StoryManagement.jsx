import React from "react";
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const sampleStories = [
  {
    id: 1,
    name: "ANJUM KHAN",
    title: "Medical Aid for Ayesha",
    status: "Pending",
    date: "May 14, 2025",
  },
];

export default function StoryManagement() {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
        Story Management
      </Typography>

      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 700 }}>
          Stories
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {sampleStories.map((s) => (
                <TableRow key={s.id}>
                  <TableCell>{s.id}</TableCell>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.title}</TableCell>
                  <TableCell>{s.status}</TableCell>
                  <TableCell>{s.date}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{ mr: 1 }}
                      onClick={() => navigate(`/admin/story/view/${s.id}`)}
                    >
                      View Story
                    </Button>

                    <Button
                      size="small"
                      variant="outlined"
                      sx={{ mr: 1 }}
                    >
                      Verified
                    </Button>

                    <Button
                      size="small"
                      variant="outlined"
                      color="success"
                    >
                      Completed
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
