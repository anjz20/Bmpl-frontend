import { useState } from "react";
import {
  Box,
  Typography,
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
} from "@mui/material";
import { Download } from "@mui/icons-material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface PayoutData {
  payoutId: string;
  date: string;
  agents: number;
  grossAmount: number;
  tds: number;
  repurchase: number;
  netPayout: number;
  status: "completed";
}

const payoutData: PayoutData[] = [
  {
    payoutId: "#ORD-7842",
    date: "12 May 2023",
    agents: 176,
    grossAmount: 567890,
    tds: 28394,
    repurchase: 56789,
    netPayout: 482707,
    status: "completed",
  },
  {
    payoutId: "#ORD-7842",
    date: "24 May 2023",
    agents: 168,
    grossAmount: 523450,
    tds: 26172,
    repurchase: 52345,
    netPayout: 444933,
    status: "completed",
  },
  {
    payoutId: "#ORD-7842",
    date: "01 May 2023",
    agents: 155,
    grossAmount: 498760,
    tds: 24938,
    repurchase: 49876,
    netPayout: 423946,
    status: "completed",
  },
  {
    payoutId: "#ORD-7842",
    date: "02 May 2023",
    agents: 176,
    grossAmount: 567890,
    tds: 24938,
    repurchase: 49876,
    netPayout: 423946,
    status: "completed",
  },
  {
    payoutId: "#ORD-7842",
    date: "05 May 2023",
    agents: 168,
    grossAmount: 523450,
    tds: 24938,
    repurchase: 49876,
    netPayout: 423946,
    status: "completed",
  },
];

const formatCurrency = (amount: number): string => {
  return `₹${amount.toLocaleString("en-IN")}`;
};

const PayoutHistory = () => {
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState<string>("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleExportAll = () => {
    // Add export logic here
  };

  const handleDownload = (payoutId: string) => {
    // Add download logic here
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
    <Box sx={{ p: 1.5 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Payout History
        </Typography>
        <Button
          variant="contained"
          startIcon={<Download />}
          onClick={handleExportAll}
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
          Export All
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
                    padding: "18px 9px",
                  },
                }}
              >
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "payoutId"}
                    direction={orderBy === "payoutId" ? order : "asc"}
                    onClick={() => handleSort("payoutId")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Payout ID
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
                    active={orderBy === "agents"}
                    direction={orderBy === "agents" ? order : "asc"}
                    onClick={() => handleSort("agents")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Agents
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "grossAmount"}
                    direction={orderBy === "grossAmount" ? order : "asc"}
                    onClick={() => handleSort("grossAmount")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Gross Amount
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "tds"}
                    direction={orderBy === "tds" ? order : "asc"}
                    onClick={() => handleSort("tds")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    TDS (5%)
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "repurchase"}
                    direction={orderBy === "repurchase" ? order : "asc"}
                    onClick={() => handleSort("repurchase")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Repurchase (10%)
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "netPayout"}
                    direction={orderBy === "netPayout" ? order : "asc"}
                    onClick={() => handleSort("netPayout")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Net Payout
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
              {payoutData.map((row, index) => (
                <TableRow key={index} hover>
                  <TableCell>{row.payoutId}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.agents}</TableCell>
                  <TableCell>{formatCurrency(row.grossAmount)}</TableCell>
                  <TableCell sx={{ color: "#d32f2f" }}>
                    {formatCurrency(row.tds)}
                  </TableCell>
                  <TableCell sx={{ color: "#d32f2f" }}>
                    {formatCurrency(row.repurchase)}
                  </TableCell>
                  <TableCell sx={{ color: "#4caf50" }}>
                    {formatCurrency(row.netPayout)}
                  </TableCell>
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
                    <IconButton
                      size="small"
                      onClick={() => handleDownload(row.payoutId)}
                      sx={{
                        color: "#26619A",
                        "&:hover": {
                          backgroundColor: "#f7f8fc",
                        },
                      }}
                    >
                      <Download fontSize="small" />
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

export default PayoutHistory;
