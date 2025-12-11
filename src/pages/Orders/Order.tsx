import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
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
import OrderDetailsModal from "../../components/OrderDetailsModal";
import Return from "../../components/Return";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface OrderData {
  orderId: string;
  date: string;
  customer: string;
  customerType: string;
  agentId?: string;
  amount: string;
  bv: string;
  status: "Delivered" | "Shipped" | "Pending" | "Processing" | "Cancelled";
}

const orders: OrderData[] = [
  {
    orderId: "#ORD-7842",
    date: "12 May 2023",
    customer: "Rahul Sharma",
    customerType: "Agent",
    agentId: "A7845",
    amount: "₹2,450",
    bv: "120 BV",
    status: "Delivered",
  },
  {
    orderId: "#ORD-7842",
    date: "24 May 2023",
    customer: "Priya Patel",
    customerType: "Retail Customer",
    amount: "₹1,850",
    bv: "85 BV",
    status: "Shipped",
  },
  {
    orderId: "#ORD-7842",
    date: "01 May 2023",
    customer: "Anil Kumar",
    customerType: "Retail Customer",
    amount: "₹3,200",
    bv: "150 BV",
    status: "Pending",
  },
  {
    orderId: "#ORD-7842",
    date: "02 May 2023",
    customer: "Neha Gupta",
    customerType: "Agent",
    agentId: "A7845",
    amount: "₹4,150",
    bv: "210 BV",
    status: "Processing",
  },
  {
    orderId: "#ORD-7842",
    date: "02 May 2023",
    customer: "Neha Gupta",
    customerType: "Agent",
    agentId: "A7845",
    amount: "₹4,150",
    bv: "210 BV",
    status: "Cancelled",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return { color: "#4caf50", backgroundColor: "#e8f5e9" };
    case "Shipped":
      return { color: "#2196f3", backgroundColor: "#e3f2fd" };
    case "Pending":
      return { color: "#ff9800", backgroundColor: "#fff3e0" };
    case "Processing":
      return { color: "#9c27b0", backgroundColor: "#f3e5f5" };
    case "Cancelled":
      return { color: "#f44336", backgroundColor: "#ffebee" };
    default:
      return { color: "#757575", backgroundColor: "#f5f5f5" };
  }
};

const Order = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState<string>("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleOpenModal = (orderData: OrderData) => {
    setSelectedOrder(orderData);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedOrder(null);
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
      opacity: 1, // force both arrows visible
    },
  };

  return (
    <Box sx={{ p: 1.5 }}>
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
          <Tab label="Orders" />
          <Tab label="Returns" />
        </Tabs>
      </Box>

      {/* Conditional Rendering based on Tab */}
      {tabValue === 0 ? (
        <>
          {/* Search and Filters */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 3,
              //   borderRadius: "12px 12px 12px 12px",
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            {/* Search Order */}
            <TextField
              placeholder="Search by Order ID or Customer Name..."
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
                <MenuItem value="Delivered">Delivered</MenuItem>
                <MenuItem value="Shipped">Shipped</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Processing">Processing</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
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
                    borderRadius: "12px 12px 12px 12px", // your desired radius
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
                    borderRadius: "12px 12px 12px 12px", // your desired radius
                  },
                }}
              />
            </Box>
          </Box>

          {/* All Orders Title with Add Category Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
              borderRadius: "12px 12px 12px 12px",
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              All Orders
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: "#4caf50",
                color: "#ffffff",
                textTransform: "none",
                fontWeight: 500,
                borderRadius: "8px",
                px: 2,
                py: 1,
                "&:hover": {
                  backgroundColor: "#45a049",
                },
              }}
            >
              Add Category
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
                        active={orderBy === "amount"}
                        direction={orderBy === "amount" ? order : "asc"}
                        onClick={() => handleSort("amount")}
                        IconComponent={DualArrowIcon}
                        sx={sortLabelSx}
                      >
                        Amount
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "bv"}
                        direction={orderBy === "bv" ? order : "asc"}
                        onClick={() => handleSort("bv")}
                        IconComponent={DualArrowIcon}
                        sx={sortLabelSx}
                      >
                        BV
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
                  {orders.map((order, index) => (
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
                      <TableCell>{order.orderId}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <Box>
                          <Typography variant="body2" fontWeight={500}>
                            {order.customer}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: "#7a7f85", fontSize: "0.75rem" }}
                          >
                            {order.customerType === "Agent"
                              ? `Agent: ${order.agentId}`
                              : order.customerType}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>{order.bv}</TableCell>
                      <TableCell>
                        <Chip
                          label={order.status}
                          size="small"
                          sx={{
                            ...getStatusColor(order.status),
                            fontWeight: 500,
                            borderRadius: "16px",
                            minWidth: 80,
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Box
                          sx={{ display: "flex", gap: 1, alignItems: "center" }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              gap: 1,
                              alignItems: "center",
                            }}
                          >
                            {/* View */}
                            <IconButton
                              size="small"
                              onClick={() => handleOpenModal(order)}
                              sx={{
                                backgroundColor: "#f7f8fc",
                                "&:hover": { backgroundColor: "#e6e8ec" },
                              }}
                              title="View"
                            >
                              <VisibilityIcon fontSize="small" />
                            </IconButton>

                            {/* Edit - Blue Color */}
                            <IconButton
                              size="small"
                              sx={{
                                backgroundColor: "#e3f2fd",
                                color: "#1976d2",
                                "&:hover": { backgroundColor: "#bbdefb" },
                              }}
                              title="Edit"
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>

                            {/* Delete - Red Color */}
                            <IconButton
                              size="small"
                              sx={{
                                backgroundColor: "#ffebee",
                                color: "#d32f2f",
                                "&:hover": { backgroundColor: "#ffcdd2" },
                              }}
                              title="Delete"
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Box>
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

          {/* Order Details Modal */}
          <OrderDetailsModal
            open={modalOpen}
            onClose={handleCloseModal}
            order={selectedOrder}
          />
        </>
      ) : (
        <Return />
      )}
    </Box>
  );
};

export default Order;
