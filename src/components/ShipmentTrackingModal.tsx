import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CustomerInfoModal, { type CustomerInfoData } from "./CustomerInfoModal";

interface ShipmentStatus {
  status: string;
  location: string;
  description: string;
  timestamp: string;
  isActive: boolean;
}

interface ShipmentData {
  orderId: string;
  trackingNumber: string;
  carrier: string;
  statusHistory: ShipmentStatus[];
}

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

interface ShipmentTrackingModalProps {
  open: boolean;
  onClose: () => void;
  shipment: ShipmentData | null;
  order?: OrderData | null;
}

const ShipmentTrackingModal = ({
  open,
  onClose,
  shipment,
  order,
}: ShipmentTrackingModalProps) => {
  const [tabValue, setTabValue] = useState(1); // Start with Shipment Tracking tab

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Default shipment data if none provided
  const defaultShipment: ShipmentData = {
    orderId: order?.orderId || "#ORD-2023-0845",
    trackingNumber: "SHIP789456123",
    carrier: "BlueDart",
    statusHistory: [
      {
        status: "Delivered",
        location: "Mumbai, Maharashtra",
        description: "Package delivered successfully",
        timestamp: "2025-10-28 16:30",
        isActive: true,
      },
      {
        status: "Out for Delivery",
        location: "Mumbai Hub",
        description: "Package out for delivery",
        timestamp: "2025-10-28 09:15",
        isActive: false,
      },
      {
        status: "In Transit",
        location: "Delhi Hub",
        description: "Package in transit",
        timestamp: "2025-10-27 14:20",
        isActive: false,
      },
      {
        status: "Shipped",
        location: "Warehouse Delhi",
        description: "Package shipped from warehouse",
        timestamp: "2025-10-27 10:00",
        isActive: false,
      },
    ],
  };

  const displayShipment = shipment || defaultShipment;

  const customerInfo: CustomerInfoData = {
    name: order?.customer || "Rajesh Kumar",
    phone: "+91 98765 43210",
    customerType: order?.customerType || "Agent",
    agentId: order?.agentId || "AGT-1045",
    email: "rajesh.kumar@example.com",
    totalOrderBV: order?.bv || "245 BV",
    creditedBV: order?.bv || "245 BV",
    placementLeg: "Left Leg",
    ledgerEntry: "LE-ORD-2025-001234",
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "12px",
          maxHeight: "90vh",
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: "#26619A",
          color: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Order Details: {displayShipment.orderId}
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              px: 3,
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 500,
                minHeight: 48,
              },
              "& .Mui-selected": {
                color: "#26619A",
                backgroundColor: "#e3f2fd",
              },
            }}
          >
            <Tab label="Order Details" />
            <Tab label="Shipment Tracking" />
            <Tab label="Customer Info" />
          </Tabs>
        </Box>

        {/* Tab Content */}
        <Box sx={{ p: 3 }}>
          {tabValue === 0 && (
            <Box sx={{ py: 4, textAlign: "center" }}>
              <Typography variant="body1" color="text.secondary">
                Order Details information will be displayed here
              </Typography>
            </Box>
          )}

          {tabValue === 1 && (
            <>
              {/* Shipment Information */}
              <Paper
                sx={{
                  p: 2,
                  mb: 3,
                  border: "1px solid #e6e8ec",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ mb: 2, color: "#26619A" }}
                >
                  Shipment Information
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 3,
                  }}
                >
                  <Box sx={{ flex: "1 1 200px" }}>
                    <Typography variant="caption" color="text.secondary">
                      Tracking Number
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {displayShipment.trackingNumber}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: "1 1 200px" }}>
                    <Typography variant="caption" color="text.secondary">
                      Carrier
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {displayShipment.carrier}
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Shipment History */}
              <Paper
                sx={{
                  p: 2,
                  mb: 3,
                  border: "1px solid #e6e8ec",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ mb: 3, color: "#26619A" }}
                >
                  Shipment History
                </Typography>
                <Box sx={{ position: "relative" }}>
                  {displayShipment.statusHistory.map((status, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        position: "relative",
                        pb:
                          index !== displayShipment.statusHistory.length - 1
                            ? 4
                            : 0,
                      }}
                    >
                      {/* Timeline Line */}
                      {index !== displayShipment.statusHistory.length - 1 && (
                        <Box
                          sx={{
                            position: "absolute",
                            left: "11px",
                            top: "24px",
                            bottom: "-16px",
                            width: "2px",
                            backgroundColor: "#e6e8ec",
                            zIndex: 0,
                          }}
                        />
                      )}

                      {/* Status Icon */}
                      <Box
                        sx={{
                          position: "relative",
                          zIndex: 1,
                          mr: 2,
                          mt: 0.5,
                        }}
                      >
                        {status.isActive ? (
                          <CheckCircleIcon
                            sx={{
                              color: "#26619A",
                              fontSize: "24px",
                              backgroundColor: "#ffffff",
                              borderRadius: "50%",
                            }}
                          />
                        ) : (
                          <RadioButtonUncheckedIcon
                            sx={{
                              color: "#9a9ea5",
                              fontSize: "24px",
                            }}
                          />
                        )}
                      </Box>

                      {/* Status Content */}
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          sx={{ mb: 0.5 }}
                        >
                          {status.status}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 0.5 }}
                        >
                          {status.location}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ display: "block", mb: 1 }}
                        >
                          {status.description}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#7a7f85",
                            fontSize: "0.75rem",
                          }}
                        >
                          {status.timestamp}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </>
          )}

          {tabValue === 2 && (
            <CustomerInfoModal customer={customerInfo} onClose={onClose} />
          )}
        </Box>
      </DialogContent>

      {tabValue === 1 && (
        <DialogActions
          sx={{
            px: 3,
            pb: 3,
            pt: 0,
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
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
        </DialogActions>
      )}
    </Dialog>
  );
};

export default ShipmentTrackingModal;
