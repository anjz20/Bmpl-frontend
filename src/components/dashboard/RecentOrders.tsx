import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

interface OrderData {
  orderId: string;
  customer: string;
  amount: string;
  bv: string;
  status: "Completed" | "Shipped" | "Processing" | "Returned";
}

const orders: OrderData[] = [
  {
    orderId: "ORD-1234",
    customer: "Rajesh Kumar",
    amount: "₹2,499",
    bv: "100 BV",
    status: "Completed",
  },
  {
    orderId: "ORD-1234",
    customer: "Priya Patel",
    amount: "₹1,850",
    bv: "120 BV",
    status: "Shipped",
  },
  {
    orderId: "ORD-1234",
    customer: "Amit Kumar",
    amount: "₹1,599",
    bv: "80 BV",
    status: "Processing",
  },
  {
    orderId: "ORD-1234",
    customer: "Sanjay Mehta",
    amount: "₹2,499",
    bv: "200 BV",
    status: "Returned",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return { color: "#4caf50", backgroundColor: "#e8f5e9" };
    case "Shipped":
      return { color: "#ff9800", backgroundColor: "#fff3e0" };
    case "Processing":
      return { color: "#2196f3", backgroundColor: "#e3f2fd" };
    case "Returned":
      return { color: "#f44336", backgroundColor: "#ffebee" };
    default:
      return { color: "#757575", backgroundColor: "#f5f5f5" };
  }
};

export default function RecentOrders() {
  return (
    <Paper sx={{ p: 3, height: "100%" }}>
      <Typography variant="h6" fontWeight={600} mb={2}>
        Recent Orders
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Order ID</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Customer</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>BV</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>{order.customer}</TableCell>
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
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
