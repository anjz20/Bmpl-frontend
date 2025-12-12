import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";

const CarryForward = () => {
  const [carryForwardLimit, setCarryForwardLimit] = useState("20");
  const [actionOnExpiry, setActionOnExpiry] = useState("Last day of month");
  const [validityDays, setValidityDays] = useState("");
  const [carryForwardType, setCarryForwardType] = useState("Join BV Only");

  const handleReset = () => {
    setCarryForwardLimit("20");
    setActionOnExpiry("Last day of month");
    setValidityDays("");
    setCarryForwardType("Join BV Only");
  };

  const handleUpdateRules = () => {
    // Handle update logic here
    console.log("Update Rules clicked");
  };

  return (
    <Paper
      sx={{
        p: 3,
        border: "1px solid #e6e8ec",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 3,
          color: "#26619A",
        }}
      >
        Carry Forward Rules
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 3,
          mb: 3,
        }}
      >
        {/* Left Column */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Carry Forward Limit */}
          <TextField
            label="Carry Forward Limit (as % of package BV)"
            value={carryForwardLimit}
            onChange={(e) => setCarryForwardLimit(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f7f8fc",
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "#e6e8ec",
                },
                "&:hover fieldset": {
                  borderColor: "#e6e8ec",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#5570f1",
                },
              },
            }}
          />

          {/* Action on Carry Forward Expiry */}
          <FormControl
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f7f8fc",
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "#e6e8ec",
                },
                "&:hover fieldset": {
                  borderColor: "#e6e8ec",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#5570f1",
                },
              },
            }}
          >
            <InputLabel>Action on Carry Forward Expiry</InputLabel>
            <Select
              value={actionOnExpiry}
              label="Action on Carry Forward Expiry"
              onChange={(e) => setActionOnExpiry(e.target.value)}
            >
              <MenuItem value="Last day of month">Last day of month</MenuItem>
              <MenuItem value="First day of month">1st of each month</MenuItem>
              <MenuItem value="End of quarter">15 of each month</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Right Column */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Carry Forward Validity (Days) */}
          <FormControl
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f7f8fc",
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "#e6e8ec",
                },
                "&:hover fieldset": {
                  borderColor: "#e6e8ec",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#5570f1",
                },
              },
            }}
          >
            <InputLabel id="validity-days-label" shrink>
              Carry Forward Validity (Days)
            </InputLabel>
            <Select
              labelId="validity-days-label"
              value={validityDays}
              label="Carry Forward Validity (Days)"
              onChange={(e) => setValidityDays(e.target.value)}
              displayEmpty
              renderValue={(selected) => {
                if (!selected || selected === "") {
                  return <span style={{ color: "#9a9ea5" }}>Select Day</span>;
                }
                return selected;
              }}
            >
              <MenuItem value="" disabled>
                Select Day
              </MenuItem>
              <MenuItem value="30">30 Days</MenuItem>
              <MenuItem value="60">60 Days</MenuItem>
              <MenuItem value="90">90 Days</MenuItem>
              <MenuItem value="120">120 Days</MenuItem>
            </Select>
          </FormControl>

          {/* Carry Forward Type */}
          <FormControl
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f7f8fc",
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "#e6e8ec",
                },
                "&:hover fieldset": {
                  borderColor: "#e6e8ec",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#5570f1",
                },
              },
            }}
          >
            <InputLabel>Carry Forward Type</InputLabel>
            <Select
              value={carryForwardType}
              label="Carry Forward Type"
              onChange={(e) => setCarryForwardType(e.target.value)}
            >
              <MenuItem value="Join BV Only">Join BV Only</MenuItem>
              <MenuItem value="all bv types">All BV Types</MenuItem>
              <MenuItem value="none">None</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          onClick={handleReset}
          sx={{
            textTransform: "none",
            borderColor: "#e6e8ec",
            color: "#8b6faf",
            backgroundColor: "#f3f0f7",
            px: 3,
            py: 1,
            "&:hover": {
              borderColor: "#8b6faf",
              backgroundColor: "#f3f0f7",
              color: "#8b6faf",
            },
          }}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          onClick={handleUpdateRules}
          sx={{
            textTransform: "none",
            backgroundColor: "#26619A",
            color: "#ffffff",
            px: 3,
            py: 1,
            "&:hover": {
              backgroundColor: "#26619A",
            },
          }}
        >
          Update Rules
        </Button>
      </Box>
    </Paper>
  );
};

export default CarryForward;
