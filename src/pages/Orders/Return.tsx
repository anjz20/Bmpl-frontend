import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  InputAdornment,
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
  IconButton,
  TableSortLabel,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface ReturnData {
  returnId: string;
  orderId: string;
  date: string;
  customer: string;
  customerType: string;
  agentId?: string;
  refundAmount: string;
  bvReversal: string;
  status: "Approved" | "Pending" | "Processing" | "Rejected";
}

const returns: ReturnData[] = [
  {
    returnId: "RET-2025-00045",
    orderId: "ORD-2025",
    date: "12 May 2023",
    customer: "Rahul Sharma",
    customerType: "Agent",
    agentId: "A7845",
    refundAmount: "₹2,450",
    bvReversal: "-165 BV",
    status: "Approved",
  },
  {
    returnId: "RET-2025-00045",
    orderId: "ORD-2025",
    date: "24 May 2023",
    customer: "Priya Patel",
    customerType: "Retail Customer",
    refundAmount: "₹1,850",
    bvReversal: "-90 BV",
    status: "Approved",
  },
  {
    returnId: "RET-2025-00045",
    orderId: "ORD-2025",
    date: "01 May 2023",
    customer: "Anil Kumar",
    customerType: "Retail Customer",
    refundAmount: "₹3,200",
    bvReversal: "-245 BV",
    status: "Pending",
  },
  {
    returnId: "RET-2025-00045",
    orderId: "ORD-2025",
    date: "02 May 2023",
    customer: "Neha Gupta",
    customerType: "Agent",
    agentId: "A7845",
    refundAmount: "₹4,150",
    bvReversal: "-245 BV",
    status: "Processing",
  },
  {
    returnId: "RET-2025-00045",
    orderId: "ORD-2025",
    date: "05 May 2023",
    customer: "Sanjay Mehta",
    customerType: "Agent",
    agentId: "A7845",
    refundAmount: "₹1,250",
    bvReversal: "-65 BV",
    status: "Rejected",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Approved":
      return { color: "#4caf50", backgroundColor: "#e8f5e9" };
    case "Pending":
      return { color: "#ff9800", backgroundColor: "#fff3e0" };
    case "Processing":
      return { color: "#2196f3", backgroundColor: "#e3f2fd" };
    case "Rejected":
      return { color: "#f44336", backgroundColor: "#ffebee" };
    default:
      return { color: "#757575", backgroundColor: "#f5f5f5" };
  }
};

const Return = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState<string>("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

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
    <Box>
      {/* Search and Filters */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {/* Search */}
        <TextField
          placeholder="Search by Return ID, Order ID or Customer Name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#9a9ea5" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            flex: 1,
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

        {/* Status Filter */}
        <FormControl
          sx={{
            minWidth: { xs: "100%", md: 200 },
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#f7f8fc",
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "#e6e8ec",
                borderRadius: "12px 12px 12px 12px",
              },
            },
          }}
        >
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            label="Status"
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Processing">Processing</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
        </FormControl>

        {/* Date Range */}
        <Box display="flex" alignItems="center" gap={2}>
          <TextField
            label="Start Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />

          <TextField
            label="End Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
        </Box>
      </Box>

      {/* Returns & Refunds Title */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Returns & Refunds
        </Typography>
      </Box>

      {/* Table */}
      <Paper
        sx={{
          overflow: "hidden",
          border: "1px solid #e6e8ec",
          borderRadius: "8px",
        }}
      >
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
                    active={orderBy === "returnId"}
                    direction={orderBy === "returnId" ? order : "asc"}
                    onClick={() => handleSort("returnId")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Return ID
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "orderId"}
                    direction={orderBy === "orderId" ? order : "asc"}
                    onClick={() => handleSort("orderId")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Order ID
                  </TableSortLabel>
                </TableCell>
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
                    active={orderBy === "customer"}
                    direction={orderBy === "customer" ? order : "asc"}
                    onClick={() => handleSort("customer")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Customer
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "refundAmount"}
                    direction={orderBy === "refundAmount" ? order : "asc"}
                    onClick={() => handleSort("refundAmount")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Refund Amount
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "bvReversal"}
                    direction={orderBy === "bvReversal" ? order : "asc"}
                    onClick={() => handleSort("bvReversal")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    BV Reversal
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
              {returns.map((returnItem, index) => (
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
                  <TableCell>{returnItem.returnId}</TableCell>
                  <TableCell>{returnItem.orderId}</TableCell>
                  <TableCell>{returnItem.date}</TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="body2" fontWeight={500}>
                        {returnItem.customer}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#7a7f85", fontSize: "0.75rem" }}
                      >
                        {returnItem.customerType === "Agent"
                          ? `Agent: ${returnItem.agentId}`
                          : returnItem.customerType}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{returnItem.refundAmount}</TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{ color: "#4caf50", fontWeight: 500 }}
                    >
                      {returnItem.bvReversal}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={returnItem.status}
                      size="small"
                      sx={{
                        ...getStatusColor(returnItem.status),
                        fontWeight: 500,
                        borderRadius: "16px",
                        minWidth: 80,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      sx={{
                        backgroundColor: "#f7f8fc",
                        "&:hover": { backgroundColor: "#e6e8ec" },
                      }}
                      title="View"
                    >
                      <VisibilityIcon fontSize="small" />
                    </IconButton>
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
                  backgroundColor: page === pageNum ? "#5570f1" : "transparent",
                  color: page === pageNum ? "#ffffff" : "#333",
                  borderColor: "#e6e8ec",
                  "&:hover": {
                    backgroundColor: page === pageNum ? "#5570f1" : "#f7f8fc",
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
                  backgroundColor: page === pageNum ? "#5570f1" : "transparent",
                  color: page === pageNum ? "#ffffff" : "#333",
                  borderColor: "#e6e8ec",
                  "&:hover": {
                    backgroundColor: page === pageNum ? "#5570f1" : "#f7f8fc",
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
  );
};

export default Return;
