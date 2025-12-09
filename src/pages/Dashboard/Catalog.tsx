// src/pages/Dashboard/Dashboard.tsx
import { Box, Paper, Typography } from "@mui/material";
const Catalog = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={2}>
        Dashboard Overview
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography>Welcome to your catelog!</Typography>
      </Paper>
    </Box>
  );
};

export default Catalog;
