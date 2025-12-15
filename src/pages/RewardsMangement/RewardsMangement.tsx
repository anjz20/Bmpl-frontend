import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  TableSortLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RewardMilestoneModal from "./RewardMilestoneModal";
import ClaimsMangement from "./ClaimsMangement";

interface RewardData {
  milestone: string;
  requirement: string;
  rewardType: "Cash" | "Gift";
  rewardValue: string;
  status: "Active" | "Inactive";
}

const rewardData: RewardData[] = [
  {
    milestone: "Silver Achiever",
    requirement: "First 2 Direct Referrals",
    rewardType: "Cash",
    rewardValue: "₹1000",
    status: "Active",
  },
  {
    milestone: "Leadership Bonus",
    requirement: "10,000 Team BV",
    rewardType: "Cash",
    rewardValue: "₹5000",
    status: "Active",
  },
  {
    milestone: "Gold Package",
    requirement: "50,000 Team BV",
    rewardType: "Gift",
    rewardValue: "Smart Watch",
    status: "Active",
  },
  {
    milestone: "Star Performer",
    requirement: "100,000 Team BV",
    rewardType: "Cash",
    rewardValue: "₹25000",
    status: "Active",
  },
  {
    milestone: "Star Performer",
    requirement: "05 May 2023",
    rewardType: "Cash",
    rewardValue: "₹25000",
    status: "Active",
  },
];

const RewardsMangement = () => {
  const [tabValue, setTabValue] = useState(0);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState<string>("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [isMilestoneModalOpen, setIsMilestoneModalOpen] = useState(false);

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
    "&:hover": {
      color: "#ffffff !important",
      backgroundColor: "transparent",
    },
    "&:hover .MuiTableSortLabel-icon": {
      color: "#ffffff !important",
      opacity: 1,
    },
  };

  return (
    <Box sx={{ p: 1.5, width: "100%", overflowX: "auto" }}>
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
          <Tab label="Rewards Configuration" />
          <Tab label="Claims Management" />
        </Tabs>
      </Box>

      {/* Rewards Configuration Content */}
      {tabValue === 0 && (
        <Box>
          {/* Header with Title and Add Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#1a1a1a" }}>
              Rewards Configuration
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setIsMilestoneModalOpen(true)}
              sx={{
                backgroundColor: "#26619A",
                color: "#ffffff",
                textTransform: "none",
                fontWeight: 500,
                borderRadius: "8px",
                px: 2,
                py: 1,
                "&:hover": {
                  backgroundColor: "#1f4d7a",
                },
              }}
            >
              Add Milestone
            </Button>
          </Box>

          {/* Table */}
          <Paper
            sx={{
              overflow: "hidden",
              border: "1px solid #e6e8ec",
              borderRadius: "8px",
            }}
          >
            <TableContainer sx={{ overflowX: "auto", maxWidth: "100%" }}>
              <Table sx={{ minWidth: 800 }}>
                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: "#26619A",
                      "& .MuiTableCell-head": {
                        color: "#ffffff",
                        fontWeight: 600,
                        borderBottom: "none",
                        whiteSpace: "nowrap",
                        padding: "18px 16px",
                      },
                    }}
                  >
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
                        active={orderBy === "requirement"}
                        direction={orderBy === "requirement" ? order : "asc"}
                        onClick={() => handleSort("requirement")}
                        IconComponent={DualArrowIcon}
                        sx={sortLabelSx}
                      >
                        Requirement
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
                  {rewardData.map((row, index) => (
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
                      <TableCell>{row.milestone}</TableCell>
                      <TableCell>{row.requirement}</TableCell>
                      <TableCell>{row.rewardType}</TableCell>
                      <TableCell>{row.rewardValue}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          size="small"
                          sx={{
                            color: "#4caf50",
                            backgroundColor: "#e8f5e9",
                            fontWeight: 500,
                            borderRadius: "16px",
                            textTransform: "capitalize",
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Box
                          sx={{ display: "flex", gap: 1, alignItems: "center" }}
                        >
                          {/* Edit - Green Color */}
                          <IconButton
                            size="small"
                            sx={{
                              color: "#4caf50",
                              "&:hover": {
                                backgroundColor: "#e8f5e9",
                              },
                            }}
                            title="Edit"
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                          {/* Delete - Red Color */}
                          <IconButton
                            size="small"
                            sx={{
                              color: "#d32f2f",
                              "&:hover": {
                                backgroundColor: "#ffebee",
                              },
                            }}
                            title="Delete"
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Box>
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
                p: 2,
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
                        page === pageNum ? "#5570f1" : "transparent",
                      color: page === pageNum ? "#ffffff" : "#333",
                      borderColor: "#e6e8ec",
                      "&:hover": {
                        backgroundColor:
                          page === pageNum ? "#5570f1" : "#f7f8fc",
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
                        page === pageNum ? "#5570f1" : "transparent",
                      color: page === pageNum ? "#ffffff" : "#333",
                      borderColor: "#e6e8ec",
                      "&:hover": {
                        backgroundColor:
                          page === pageNum ? "#5570f1" : "#f7f8fc",
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

      {/* Claims Management Content */}
      {tabValue === 1 && <ClaimsMangement />}

      {/* Reward Milestone Modal */}
      <RewardMilestoneModal
        open={isMilestoneModalOpen}
        onClose={() => setIsMilestoneModalOpen(false)}
        onSubmit={(data) => {
          // Handle form submission here
          console.log("Milestone data:", data);
          setIsMilestoneModalOpen(false);
        }}
      />
    </Box>
  );
};

export default RewardsMangement;
