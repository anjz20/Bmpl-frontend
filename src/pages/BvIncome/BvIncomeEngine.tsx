import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  TableSortLabel,
  Button,
  Switch,
  FormControlLabel,
  InputAdornment,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface BinaryMatchingRun {
  date: string;
  totalBvProcessed: string;
  matchedBv: string;
  incomeGenerated: string;
  agentsAffected: string;
  status: "completed";
}

const binaryMatchingRuns: BinaryMatchingRun[] = [
  {
    date: "2023-05-15",
    totalBvProcessed: "₹1,24,850",
    matchedBv: "₹4,21,500",
    incomeGenerated: "₹42,150",
    agentsAffected: "1,248",
    status: "completed",
  },
  {
    date: "2023-05-14",
    totalBvProcessed: "₹1,10,750",
    matchedBv: "₹3,89,200",
    incomeGenerated: "₹38,920",
    agentsAffected: "1,102",
    status: "completed",
  },
  {
    date: "2023-05-13",
    totalBvProcessed: "₹98,450",
    matchedBv: "₹3,52,800",
    incomeGenerated: "₹35,280",
    agentsAffected: "984",
    status: "completed",
  },
];

const BvIncomeEngine = () => {
  const [tabValue, setTabValue] = useState(0);
  const [matchingRatio, setMatchingRatio] = useState("1:1");
  const [commissionRate, setCommissionRate] = useState("10");
  const [matchingFrequency, setMatchingFrequency] = useState("Hourly");
  const [matchingTime, setMatchingTime] = useState("11:59PM");
  const [monthlyBvFlush, setMonthlyBvFlush] = useState(false);
  const [enableAutomatic, setEnableAutomatic] = useState(false);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState<string>("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const DualArrowIcon = ({ className }: { className?: string }) => (
    <Box
      component="span"
      className={className}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: "2px",
      }}
    >
      <ArrowUpwardIcon fontSize="small" />
      <ArrowDownwardIcon fontSize="small" />
    </Box>
  );

  const sortLabelSx = {
    color: "#ffffff !important",
    "& .MuiTableSortLabel-icon": {
      color: "#ffffff !important",
      opacity: 1,
    },
  };

  return (
    <Box sx={{ display: "flex", gap: 3, p: 0 }}>
      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Tabs */}
        <Box sx={{ mb: 3 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 500,
                minHeight: 48,
                px: 3,
              },
              "& .Mui-selected": {
                backgroundColor: "#26619A",
                color: "#ffffff !important",
                borderRadius: "12px 12px 12px 12px",
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <Tab label="Binary Matching" />
            <Tab label="Carry-Forward" />
            <Tab label="Capping" />
            <Tab label="Recalc & Sync" />
          </Tabs>
        </Box>

        {/* Binary Matching Configuration */}
        <Paper
          sx={{
            p: 3,
            mb: 3,
            border: "1px solid #e6e8ec",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: "" }}>
            Binary Matching Configuration
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
              mb: 3,
            }}
          >
            {/* Matching Ratio */}
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
              <InputLabel>Matching Ratio</InputLabel>
              <Select
                value={matchingRatio}
                label="Matching Ratio"
                onChange={(e) => setMatchingRatio(e.target.value)}
              >
                <MenuItem value="1:1">1:1 Matching </MenuItem>
                <MenuItem value="2:1">2:1 Matching </MenuItem>
                <MenuItem value="3:1">3:1 Matching </MenuItem>
              </Select>
            </FormControl>

            {/* Commission Rate */}
            <TextField
              label="Commission Rate (%)"
              value={commissionRate}
              onChange={(e) => setCommissionRate(e.target.value)}
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

            {/* Matching Frequency */}
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
              <InputLabel>Matching Frequency</InputLabel>
              <Select
                value={matchingFrequency}
                label="Matching Frequency"
                onChange={(e) => setMatchingFrequency(e.target.value)}
              >
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Hourly">Hourly</MenuItem>
                <MenuItem value="Weekly">Weekly</MenuItem>
              </Select>
            </FormControl>

            {/* Matching Time */}
            <TextField
              label="Matching Time"
              value={matchingTime}
              onChange={(e) => setMatchingTime(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccessTimeIcon sx={{ color: "#9a9ea5" }} />
                  </InputAdornment>
                ),
              }}
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
          </Box>

          {/* Toggle Switches */}
          <Box
            sx={{
              mb: 3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, color: "#333" }}
              >
                Monthly BV Flush Out
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={monthlyBvFlush}
                    onChange={(e) => setMonthlyBvFlush(e.target.checked)}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#26619A",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: "#26619A",
                        },
                    }}
                  />
                }
                label="Reset BV at month end"
                sx={{
                  margin: 0,
                  "& .MuiFormControlLabel-label": {
                    color: monthlyBvFlush ? "#333" : "#9a9ea5",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                  },
                }}
              />
            </Box>

            <FormControlLabel
              control={
                <Switch
                  checked={enableAutomatic}
                  onChange={(e) => setEnableAutomatic(e.target.checked)}
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#26619A",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#26619A",
                    },
                  }}
                />
              }
              label="Enable Automatic Binary Matching"
              sx={{
                margin: 0,
                "& .MuiFormControlLabel-label": {
                  color: enableAutomatic ? "#333" : "#9a9ea5",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                },
              }}
            />
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
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
              Save Configuration
            </Button>
          </Box>
        </Paper>

        {/* Recent Binary Matching Runs */}
        <Paper
          sx={{
            border: "1px solid #e6e8ec",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            overflow: "hidden",
          }}
        >
          <Box sx={{ p: 3, borderBottom: "1px solid #e6e8ec" }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
              Recent Binary Matching Runs
            </Typography>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: "#26619A",
                    "& .MuiTableCell-head": {
                      color: "#ffffff",
                      fontWeight: 600,
                      borderBottom: "none",
                    },
                  }}
                >
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "date"}
                      direction={orderBy === "date" ? order : "asc"}
                      onClick={() => handleSort("date")}
                      IconComponent={DualArrowIcon}
                      sx={sortLabelSx}
                    >
                      Date
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "totalBvProcessed"}
                      direction={orderBy === "totalBvProcessed" ? order : "asc"}
                      onClick={() => handleSort("totalBvProcessed")}
                      IconComponent={DualArrowIcon}
                      sx={sortLabelSx}
                    >
                      Total BV Processed
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "matchedBv"}
                      direction={orderBy === "matchedBv" ? order : "asc"}
                      onClick={() => handleSort("matchedBv")}
                      IconComponent={DualArrowIcon}
                      sx={sortLabelSx}
                    >
                      Matched BV
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "incomeGenerated"}
                      direction={orderBy === "incomeGenerated" ? order : "asc"}
                      onClick={() => handleSort("incomeGenerated")}
                      IconComponent={DualArrowIcon}
                      sx={sortLabelSx}
                    >
                      Income Generated
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "agentsAffected"}
                      direction={orderBy === "agentsAffected" ? order : "asc"}
                      onClick={() => handleSort("agentsAffected")}
                      IconComponent={DualArrowIcon}
                      sx={sortLabelSx}
                    >
                      Agents Affected
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "status"}
                      direction={orderBy === "status" ? order : "asc"}
                      onClick={() => handleSort("status")}
                      IconComponent={DualArrowIcon}
                      sx={sortLabelSx}
                    >
                      Status
                    </TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {binaryMatchingRuns.map((run, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#f7f8fc",
                      },
                      "& .MuiTableCell-body": {
                        borderBottom: "1px solid #e6e8ec",
                      },
                    }}
                  >
                    <TableCell>{run.date}</TableCell>
                    <TableCell>{run.totalBvProcessed}</TableCell>
                    <TableCell>{run.matchedBv}</TableCell>
                    <TableCell>{run.incomeGenerated}</TableCell>
                    <TableCell>{run.agentsAffected}</TableCell>
                    <TableCell>
                      <Chip
                        label={run.status}
                        size="small"
                        sx={{
                          backgroundColor: "#e8f5e9",
                          color: "#4caf50",
                          fontWeight: 500,
                          borderRadius: "16px",
                          minWidth: 100,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              borderTop: "1px solid #e6e8ec",
            }}
          >
            <Button
              variant="outlined"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              sx={{
                textTransform: "none",
                borderColor: "#e6e8ec",
                color: "#333",
                "&:hover": {
                  borderColor: "#5570f1",
                  backgroundColor: "#f7f8fc",
                },
                "&:disabled": {
                  borderColor: "#e6e8ec",
                  color: "#9a9ea5",
                },
              }}
            >
              &lt; Previous
            </Button>

            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {[1, 2, 3, 4].map((pageNum) => (
                <Button
                  key={pageNum}
                  variant={page === pageNum ? "contained" : "outlined"}
                  onClick={() => setPage(pageNum)}
                  sx={{
                    minWidth: 40,
                    height: 40,
                    textTransform: "none",
                    backgroundColor:
                      page === pageNum ? "#26619A" : "transparent",
                    color: page === pageNum ? "#ffffff" : "#333",
                    borderColor: "#e6e8ec",
                    "&:hover": {
                      backgroundColor: page === pageNum ? "#26619A" : "#f7f8fc",
                      borderColor: "#5570f1",
                    },
                  }}
                >
                  {pageNum}
                </Button>
              ))}
              <Typography sx={{ mx: 1, color: "#333" }}>...</Typography>
              {[13, 14].map((pageNum) => (
                <Button
                  key={pageNum}
                  variant={page === pageNum ? "contained" : "outlined"}
                  onClick={() => setPage(pageNum)}
                  sx={{
                    minWidth: 40,
                    height: 40,
                    textTransform: "none",
                    backgroundColor:
                      page === pageNum ? "#26619A" : "transparent",
                    color: page === pageNum ? "#ffffff" : "#333",
                    borderColor: "#e6e8ec",
                    "&:hover": {
                      backgroundColor: page === pageNum ? "#26619A" : "#f7f8fc",
                      borderColor: "#5570f1",
                    },
                  }}
                >
                  {pageNum}
                </Button>
              ))}
            </Box>

            <Button
              variant="outlined"
              disabled={page === 14}
              onClick={() => setPage(page + 1)}
              sx={{
                textTransform: "none",
                borderColor: "#e6e8ec",
                color: "#333",
                "&:hover": {
                  borderColor: "#5570f1",
                  backgroundColor: "#f7f8fc",
                },
                "&:disabled": {
                  borderColor: "#e6e8ec",
                  color: "#9a9ea5",
                },
              }}
            >
              Next &gt;
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* Right Sidebar */}
      <Box
        sx={{
          width: 280,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      ></Box>
    </Box>
  );
};

export default BvIncomeEngine;
