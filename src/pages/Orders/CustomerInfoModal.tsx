import { useState } from "react";
import { Box, Paper, Typography, Divider, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import InvoiceModal from "./DummyInvoiceModal";
export interface CustomerInfoData {
  name: string;
  phone: string;
  customerType: string;
  agentId?: string;
  email: string;
  totalOrderBV: string;
  creditedBV: string;
  placementLeg: string;
  ledgerEntry: string;
}

const CustomerInfoModal = ({
  customer,
  onClose,
  onDownloadInvoice,
}: {
  customer?: Partial<CustomerInfoData>;
  onClose?: () => void;
  onDownloadInvoice?: () => void;
}) => {
  const [invoiceOpen, setInvoiceOpen] = useState(false);

  const displayCustomer: CustomerInfoData = {
    name: customer?.name || "Rajesh Kumar",
    phone: customer?.phone || "+91 98765 43210",
    customerType: customer?.customerType || "Agent",
    agentId: customer?.agentId || "AGT-1045",
    email: customer?.email || "rajesh.kumar@example.com",
    totalOrderBV: customer?.totalOrderBV || "245 BV",
    creditedBV: customer?.creditedBV || "245 BV",
    placementLeg: customer?.placementLeg || "Left Leg",
    ledgerEntry: customer?.ledgerEntry || "LE-ORD-2025-001234",
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Paper
        sx={{
          p: 3,
          border: "1px solid #e6e8ec",
          borderRadius: "12px",
          backgroundColor: "#f9fbff",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ mb: 2, color: "#26619A" }}
        >
          Customer Information
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2.5,
          }}
        >
          <Box>
            <Typography variant="caption" color="text.secondary">
              Name
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              {displayCustomer.name}
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" color="text.secondary">
              Phone
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              {displayCustomer.phone}
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" color="text.secondary">
              Customer Type
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              {displayCustomer.customerType}
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" color="text.secondary">
              Agent ID
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              {displayCustomer.agentId}
            </Typography>
          </Box>

          <Box sx={{ gridColumn: { xs: "auto", sm: "1 / span 2" } }}>
            <Typography variant="caption" color="text.secondary">
              Email
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              {displayCustomer.email}
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Paper
        sx={{
          p: 3,
          border: "1px solid #e6e8ec",
          borderRadius: "12px",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ mb: 2, color: "#26619A" }}
        >
          BV Distribution
        </Typography>

        <Divider sx={{ mb: 2, borderColor: "#000000" }} />

        <Box
          sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: 1 }}
        >
          <Typography color="text.secondary">Total Order BV</Typography>
          <Typography fontWeight={600} sx={{ color: "#26619A" }}>
            {displayCustomer.totalOrderBV}
          </Typography>

          <Typography color="text.secondary">Credited to Agent</Typography>
          <Typography fontWeight={600} sx={{ color: "#4caf50" }}>
            {displayCustomer.creditedBV}
          </Typography>

          <Typography color="text.secondary">Placement Leg</Typography>
          <Typography fontWeight={600}>
            {displayCustomer.placementLeg}
          </Typography>

          <Typography color="text.secondary">BV Ledger Entry</Typography>
          <Typography fontWeight={600}>
            {displayCustomer.ledgerEntry}
          </Typography>
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            textTransform: "none",
            borderColor: "#e6e8ec",
            color: "#333",
            borderRadius: "999px", // <-- OVAL SHAPE
            paddingX: 3,
            "&:hover": {
              borderColor: "#e6e8ec",
              backgroundColor: "#f7f8fc",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={() => {
            if (onDownloadInvoice) {
              onDownloadInvoice();
            }
            setInvoiceOpen(true);
          }}
          sx={{
            textTransform: "none",
            backgroundColor: "#26619A",
            borderRadius: "999px", // <-- OVAL SHAPE
            paddingX: 3,
            "&:hover": {
              backgroundColor: "#1e4d7a",
            },
          }}
        >
          Download Invoice
        </Button>
      </Box>
      <InvoiceModal
        open={invoiceOpen}
        onClose={() => setInvoiceOpen(false)}
        orderId={displayCustomer.ledgerEntry || "ORD-2025-001234"}
        invoiceNumber="INV-2025-001234"
        invoiceDate="01 Aug, 2023"
        paymentMethod="UPI"
        paymentStatus="Paid"
        customerName={displayCustomer.name}
        customerAddress="Flat 402, Crystal Plaza, MG Road, Mumbai, Maharashtra - 400001"
        customerPhone={displayCustomer.phone}
        agentId={displayCustomer.agentId}
      />
    </Box>
  );
};

export default CustomerInfoModal;
