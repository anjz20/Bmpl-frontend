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
  TableSortLabel,
  Button,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface WalletLedgerData {
  agentId: string;
  name: string;
  earningsWallet: number;
  repurchaseWallet: number;
  coinsBalance: number;
  coupons: number;
  status: "credited";
}

const walletLedgerData: WalletLedgerData[] = [
  {
    agentId: "AG-5001",
    name: "Rajesh Kumar",
    earningsWallet: 12450,
    repurchaseWallet: 1245,
    coinsBalance: 500,
    coupons: 10,
    status: "credited",
  },
  {
    agentId: "AG-5001",
    name: "Priya Sharma",
    earningsWallet: 8900,
    repurchaseWallet: 890,
    coinsBalance: 250,
    coupons: 5,
    status: "credited",
  },
  {
    agentId: "AG-5001",
    name: "Amit Patel",
    earningsWallet: 15670,
    repurchaseWallet: 1567,
    coinsBalance: 500,
    coupons: 12,
    status: "credited",
  },
  {
    agentId: "AG-5001",
    name: "Rajesh Kumar",
    earningsWallet: 12450,
    repurchaseWallet: 1245,
    coinsBalance: 500,
    coupons: 10,
    status: "credited",
  },
  {
    agentId: "AG-5001",
    name: "Priya Sharma",
    earningsWallet: 8900,
    repurchaseWallet: 890,
    coinsBalance: 250,
    coupons: 5,
    status: "credited",
  },
];

const formatCurrency = (amount: number): string => {
  return `₹${amount.toLocaleString("en-IN")}`;
};

const WalletLedgers = () => {
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
    console.log("Exporting all wallet ledgers...");
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
    <Box sx={{ p: 1.5, width: "100%", overflow: "hidden" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Wallet Ledgers
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
                    padding: "12px 16px",
                  },
                }}
              >
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "agentId"}
                    direction={orderBy === "agentId" ? order : "asc"}
                    onClick={() => handleSort("agentId")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Agent ID
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "name"}
                    direction={orderBy === "name" ? order : "asc"}
                    onClick={() => handleSort("name")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "earningsWallet"}
                    direction={orderBy === "earningsWallet" ? order : "asc"}
                    onClick={() => handleSort("earningsWallet")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Earnings Wallet
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "repurchaseWallet"}
                    direction={orderBy === "repurchaseWallet" ? order : "asc"}
                    onClick={() => handleSort("repurchaseWallet")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Repurchase Wallet
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "coinsBalance"}
                    direction={orderBy === "coinsBalance" ? order : "asc"}
                    onClick={() => handleSort("coinsBalance")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Coins Balance
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "coupons"}
                    direction={orderBy === "coupons" ? order : "asc"}
                    onClick={() => handleSort("coupons")}
                    IconComponent={DualArrowIcon}
                    sx={sortLabelSx}
                  >
                    Coupons (₹100)
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
              {walletLedgerData.map((row, index) => (
                <TableRow
                  key={index}
                  hover
                  sx={{
                    "& .MuiTableCell-body": {
                      padding: "12px 16px",
                      whiteSpace: "nowrap",
                    },
                    "&:hover": {
                      backgroundColor: "#f7f8fc",
                    },
                  }}
                >
                  <TableCell>{row.agentId}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{formatCurrency(row.earningsWallet)}</TableCell>
                  <TableCell>{formatCurrency(row.repurchaseWallet)}</TableCell>
                  <TableCell>{row.coinsBalance} Coins</TableCell>
                  <TableCell>{row.coupons} Coupons</TableCell>
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

export default WalletLedgers;
