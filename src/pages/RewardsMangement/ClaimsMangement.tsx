import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  TableSortLabel,
  Button,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface ClaimData {
  claimId: string;
  agent: {
    name: string;
    email: string;
    avatar: string;
  };
  milestone: string;
  rewardType: "Cash" | "Gift";
  rewardValue: string;
  claimDate: string;
  status: "Pending" | "Approved" | "Rejected";
}

const claimData: ClaimData[] = [
  {
    claimId: "CLM-001",
    agent: {
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      avatar: "https://i.pravatar.cc/50?img=1",
    },
    milestone: "Starter Achievement",
    rewardType: "Cash",
    rewardValue: "₹1000",
    claimDate: "2024-10-27",
    status: "Pending",
  },
  {
    claimId: "CLM-002",
    agent: {
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      avatar: "https://i.pravatar.cc/50?img=1",
    },
    milestone: "Bronze Leader",
    rewardType: "Cash",
    rewardValue: "₹5000",
    claimDate: "2024-10-26",
    status: "Pending",
  },
  {
    claimId: "CLM-003",
    agent: {
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      avatar: "https://i.pravatar.cc/50?img=1",
    },
    milestone: "Silver Leader",
    rewardType: "Gift",
    rewardValue: "Smart Watch",
    claimDate: "2024-10-25",
    status: "Approved",
  },
  {
    claimId: "CLM-004",
    agent: {
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      avatar: "https://i.pravatar.cc/50?img=1",
    },
    milestone: "Silver Leader",
    rewardType: "Cash",
    rewardValue: "₹25000",
    claimDate: "2024-10-27",
    status: "Approved",
  },
  {
    claimId: "CLM-005",
    agent: {
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      avatar: "https://i.pravatar.cc/50?img=1",
    },
    milestone: "Gold Leader",
    rewardType: "Cash",
    rewardValue: "₹25000",
    claimDate: "2024-10-25",
    status: "Approved",
  },
];

const ClaimsMangement = () => {
  const [tabValue, setTabValue] = useState(1);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState<string>("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleApprove = (claimId: string) => {
    // Add approve logic here
    console.log("Approve claim:", claimId);
  };

  const handleReject = (claimId: string) => {
    // Add reject logic here
    console.log("Reject claim:", claimId);
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
    <Box sx={{ p: 1, width: "100%", overflowX: "auto" }}>
      {/* Claims Management Content */}
      {tabValue === 1 && (
        <Box>
          {/* Search and Status Filter */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 2,
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            {/* Search */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{ mb: 0.5, color: "#333333" }}
              >
                Search
              </Typography>
              <TextField
                placeholder="Search by name, Claim ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "#9a9ea5" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f7f8fc",
                    borderRadius: "12px",
                    "& fieldset": {
                      borderColor: "#e6e8ec",
                      borderRadius: "12px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#e6e8ec",
                      borderRadius: "12px",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#5570f1",
                      borderRadius: "12px",
                    },
                  },
                }}
              />
            </Box>

            {/* Status Filter */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{ mb: 0.5, color: "#333333" }}
              >
                Status
              </Typography>
              <FormControl
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f7f8fc",
                    borderRadius: "12px",
                    "& fieldset": {
                      borderColor: "#e6e8ec",
                      borderRadius: "12px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#e6e8ec",
                      borderRadius: "12px",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#5570f1",
                      borderRadius: "12px",
                    },
                  },
                }}
              >
                <Select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  displayEmpty
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{
                    "& .MuiSelect-select": {
                      display: "flex",
                      alignItems: "center",
                    },
                  }}
                  renderValue={(selected) => {
                    if (!selected || selected === "all") {
                      return (
                        <Typography sx={{ color: "#9a9ea5" }}>
                          All Status
                        </Typography>
                      );
                    }
                    return selected;
                  }}
                >
                  <MenuItem value="all">All Status</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Approved">Approved</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Pending Reward Claims Title */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#1a1a1a", mb: 1.5 }}
          >
            Pending Reward Claims
          </Typography>

          {/* Table */}
          <Paper
            sx={{
              overflow: "hidden",
              border: "1px solid #e6e8ec",
              borderRadius: "8px",
            }}
          >
            <TableContainer sx={{ overflowX: "auto", maxWidth: "100%" }}>
              <Table sx={{ minWidth: 1000 }}>
                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: "#26619A",
                      "& .MuiTableCell-head": {
                        color: "#ffffff",
                        fontWeight: 600,
                        borderBottom: "none",
                        whiteSpace: "nowrap",
                        padding: "12px 9px",
                      },
                    }}
                  >
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "claimId"}
                        direction={orderBy === "claimId" ? order : "asc"}
                        onClick={() => handleSort("claimId")}
                        IconComponent={DualArrowIcon}
                        sx={sortLabelSx}
                      >
                        Claim ID
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "agent"}
                        direction={orderBy === "agent" ? order : "asc"}
                        onClick={() => handleSort("agent")}
                        IconComponent={DualArrowIcon}
                        sx={sortLabelSx}
                      >
                        Agent
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "milestone"}
                        direction={orderBy === "milestone" ? order : "asc"}
                        onClick={() => handleSort("milestone")}
                        IconComponent={DualArrowIcon}
                        sx={sortLabelSx}
                      >
                        Milestone
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "rewardType"}
                        direction={orderBy === "rewardType" ? order : "asc"}
                        onClick={() => handleSort("rewardType")}
                        IconComponent={DualArrowIcon}
                        sx={sortLabelSx}
                      >
                        Reward Type
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "rewardValue"}
                        direction={orderBy === "rewardValue" ? order : "asc"}
                        onClick={() => handleSort("rewardValue")}
                        IconComponent={DualArrowIcon}
                        sx={sortLabelSx}
                      >
                        Reward Value
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "claimDate"}
                        direction={orderBy === "claimDate" ? order : "asc"}
                        onClick={() => handleSort("claimDate")}
                        IconComponent={DualArrowIcon}
                        sx={sortLabelSx}
                      >
                        Claim Date
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
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {claimData.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#f7f8fc",
                        },
                        "& .MuiTableCell-body": {
                          borderBottom: "1px solid #e6e8ec",
                          padding: "10px 6px",
                        },
                      }}
                    >
                      <TableCell>{row.claimId}</TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                          }}
                        >
                          <Avatar
                            src={row.agent.avatar}
                            alt={row.agent.name}
                            sx={{ width: 40, height: 40 }}
                          />
                          <Box>
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: 500, color: "#1a1a1a" }}
                            >
                              {row.agent.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ color: "#9a9ea5", fontSize: "0.75rem" }}
                            >
                              {row.agent.email}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>{row.milestone}</TableCell>
                      <TableCell>{row.rewardType}</TableCell>
                      <TableCell>{row.rewardValue}</TableCell>
                      <TableCell>{row.claimDate}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          size="small"
                          sx={{
                            color:
                              row.status === "Pending" ? "#f57c00" : "#4caf50",
                            backgroundColor:
                              row.status === "Pending" ? "#fff3e0" : "#e8f5e9",
                            fontWeight: 500,
                            borderRadius: "16px",
                            textTransform: "capitalize",
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        {row.status === "Pending" ? (
                          <Box
                            sx={{
                              display: "flex",
                              gap: 1,
                              alignItems: "center",
                            }}
                          >
                            <IconButton
                              size="small"
                              onClick={() => handleApprove(row.claimId)}
                              sx={{
                                width: 36,
                                height: 36,
                                borderRadius: "50%",
                                backgroundColor: "#eaf2fb",
                                border: "1px solid #cfe0f5",
                                color: "#26619A",
                                "&:hover": {
                                  backgroundColor: "#dceafb",
                                },
                              }}
                            >
                              <CheckIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                              size="small"
                              onClick={() => handleReject(row.claimId)}
                              sx={{
                                width: 36,
                                height: 36,
                                borderRadius: "50%",
                                backgroundColor: "#fdecea",
                                border: "1px solid #f5c6c3",
                                color: "#d32f2f",
                                "&:hover": {
                                  backgroundColor: "#fbdad7",
                                },
                              }}
                            >
                              <CloseIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        ) : (
                          <Typography
                            variant="body2"
                            sx={{ color: "#9a9ea5", fontSize: "0.875rem" }}
                          >
                            Processed
                          </Typography>
                        )}
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
                justifyContent: "center",
                alignItems: "center",
                p: 1.5,
                borderTop: "1px solid #e6e8ec",
                gap: 1,
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
                        backgroundColor:
                          page === pageNum ? "#26619A" : "#f7f8fc",
                        borderColor: "#5570f1",
                      },
                    }}
                  >
                    {pageNum}
                  </Button>
                ))}
                <Typography sx={{ mx: 1 }}>...</Typography>
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
                        backgroundColor:
                          page === pageNum ? "#26619A" : "#f7f8fc",
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
                }}
              >
                Next &gt;
              </Button>
            </Box>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default ClaimsMangement;
