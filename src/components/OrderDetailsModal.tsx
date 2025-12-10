import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  Chip,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CustomerInfoModal, { type CustomerInfoData } from "./CustomerInfoModal";

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

interface OrderDetailsModalProps {
  open: boolean;
  onClose: () => void;
  order: OrderData | null;
}

const OrderDetailsModal = ({
  open,
  onClose,
  order,
}: OrderDetailsModalProps) => {
  const [tabValue, setTabValue] = useState(0);

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

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  if (!order) return null;

  const customerInfo: CustomerInfoData = {
    name: order.customer,
    phone: "+91 98765 43210",
    customerType: order.customerType,
    agentId: order.agentId,
    email: "rajesh.kumar@example.com",
    totalOrderBV: order.bv || "245 BV",
    creditedBV: order.bv || "245 BV",
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
          backgroundColor: "",
          color: "#000000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Order Details: {order.orderId}
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
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "#e5e7eb",
            borderTop: "3px solid #26619A",
            backgroundColor: "#ffffff",
          }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            TabIndicatorProps={{ sx: { display: "none" } }}
            sx={{
              px: 3,
              pt: 1,
              "& .MuiTabs-flexContainer": {
                gap: "12px",
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 500,
                minHeight: 44,
                padding: "10px 20px",
                borderRadius: "8px",
                color: "#1f2937",
                transition: "all 0.2s ease",
                // "&:hover": {
                //   backgroundColor: "#eef4fb",
                // },
              },
              "& .Mui-selected": {
                color: "#ffffff",
                backgroundColor: "#26619A",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.12)",
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
            <>
              {/* Order Status */}
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
                  Order Status
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >
                  <Box sx={{ flex: "1 1 200px" }}>
                    <Typography variant="caption" color="text.secondary">
                      Order Date
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {order.date}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: "1 1 200px" }}>
                    <Typography variant="caption" color="text.secondary">
                      Payment Method
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      UPI
                    </Typography>
                  </Box>
                  <Box sx={{ flex: "1 1 200px" }}>
                    <Typography variant="caption" color="text.secondary">
                      Customer Type
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {order.customerType}
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Order Items */}
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
                  Order Items
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    p: 2,
                    backgroundColor: "#f7f8fc",
                    borderRadius: "8px",
                    mb: 2,
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" fontWeight={600} sx={{ mb: 1 }}>
                      Premium Omega-3 Fish Oil Capsules
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      SKU: HLTH-001
                    </Typography>
                    <Box
                      sx={{ mt: 1, display: "flex", gap: 2, flexWrap: "wrap" }}
                    >
                      <Typography variant="body2">
                        <strong>Qty:</strong> 2
                      </Typography>
                      <Typography variant="body2">
                        <strong>Price per item:</strong> ₹899
                      </Typography>
                      <Chip
                        label="90 BV"
                        size="small"
                        sx={{
                          backgroundColor: "#e8f5e9",
                          color: "#4caf50",
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography variant="body1" fontWeight={600}>
                      ₹1,798
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#4caf50", fontWeight: 500 }}
                    >
                      180 BV
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Order Summary */}
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
                  Order Summary
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      py: 1,
                    }}
                  >
                    <Typography variant="body2">Subtotal</Typography>
                    <Typography variant="body2" fontWeight={500}>
                      ₹2,448.00
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      py: 1,
                    }}
                  >
                    <Typography variant="body2">Shipping</Typography>
                    <Typography variant="body2" fontWeight={500}>
                      ₹0.00
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      py: 1,
                    }}
                  >
                    <Typography variant="body2">GST (18%)</Typography>
                    <Typography variant="body2" fontWeight={500}>
                      ₹440.64
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      py: 1,
                    }}
                  >
                    <Typography variant="body2">Coins Applied</Typography>
                    <Typography
                      variant="body2"
                      fontWeight={500}
                      sx={{ color: "#4caf50" }}
                    >
                      -₹100.00
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      py: 1,
                    }}
                  >
                    <Typography variant="body1" fontWeight={600}>
                      Total Amount
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      ₹2,788.64
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      py: 1,
                    }}
                  >
                    <Typography variant="body2">Total BV Earned</Typography>
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      sx={{ color: "#2196f3" }}
                    >
                      245 BV
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Delivery Address */}

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
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#26619A",
                    borderRadius: "999px", // <-- OVAL SHAPE
                    paddingX: 3,
                    "&:hover": {
                      backgroundColor: "",
                      borderRadius: "999px", // <-- OVAL SHAPE
                      paddingX: 3,
                    },
                  }}
                >
                  Download Invoice
                </Button>
              </Box>
            </>
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
                      {defaultShipment.trackingNumber}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: "1 1 200px" }}>
                    <Typography variant="caption" color="text.secondary">
                      Carrier
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {defaultShipment.carrier}
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
                  {defaultShipment.statusHistory.map((status, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        position: "relative",
                        pb:
                          index !== defaultShipment.statusHistory.length - 1
                            ? 4
                            : 0,
                      }}
                    >
                      {/* Timeline Line */}
                      {index !== defaultShipment.statusHistory.length - 1 && (
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

export default OrderDetailsModal;
