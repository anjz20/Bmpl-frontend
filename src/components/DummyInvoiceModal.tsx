import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import invoice from "../assets/invoice.png";

interface InvoiceProduct {
  name: string;
  sku: string;
  hsn: string;
  qty: number;
  bv: number;
  rate: number;
  amount: number;
}

interface InvoiceModalProps {
  open: boolean;
  onClose: () => void;
  orderId?: string;
  invoiceNumber?: string;
  invoiceDate?: string;
  paymentMethod?: string;
  paymentStatus?: string;
  customerName?: string;
  customerAddress?: string;
  customerPhone?: string;
  agentId?: string;
  subject?: string;
  products?: InvoiceProduct[];
  subtotal?: number;
  discount?: number;
  shippingCharges?: number;
  cgst?: number;
  sgst?: number;
  cgstRate?: number;
  sgstRate?: number;
  grandTotal?: number;
  totalBV?: number;
}

const InvoiceModal: React.FC<InvoiceModalProps> = ({
  open,
  onClose,
  orderId = "ORD-2025-001234",
  invoiceNumber = "INV-2025-001234",
  invoiceDate = "01 Aug, 2023",
  paymentMethod = "UPI",
  paymentStatus = "Paid",
  customerName = "Rajesh Kumar",
  customerAddress = "Flat 402, Crystal Plaza, MG Road, Mumbai, Maharashtra - 400001",
  customerPhone = "+91 98765 43210",
  agentId = "AGT-1045",
  subject = "Design System",
  products = [
    {
      name: "Premium Omega-3 Fish Oil Capsules",
      sku: "HLTH-001",
      hsn: "30049099",
      qty: 1,
      bv: 180,
      rate: 899.0,
      amount: 1798.0,
    },
    {
      name: "Vitamin D3 + K2 Supplement",
      sku: "HLTH-012",
      hsn: "30049099",
      qty: 1,
      bv: 65,
      rate: 650.0,
      amount: 650.0,
    },
  ],
  subtotal = 2448.0,
  discount = 100.0,
  shippingCharges = 0.0,
  cgst = 211.32,
  sgst = 211.32,
  cgstRate = 9.0,
  sgstRate = 9.0,
  grandTotal = 2770.64,
  totalBV = 245,
}) => {
  const formatCurrency = (amount: number) => {
    return `₹${amount.toFixed(2)}`;
  };

  const numberToWords = (num: number): string => {
    const ones = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    const teens = [
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    const convertHundreds = (n: number): string => {
      let result = "";
      if (n >= 100) {
        result += ones[Math.floor(n / 100)] + " Hundred ";
        n %= 100;
      }
      if (n >= 20) {
        result += tens[Math.floor(n / 10)] + " ";
        n %= 10;
      }
      if (n >= 10) {
        result += teens[n - 10] + " ";
        n = 0;
      }
      if (n > 0) {
        result += ones[n] + " ";
      }
      return result;
    };

    const convertThousands = (n: number): string => {
      if (n >= 1000) {
        return (
          convertHundreds(Math.floor(n / 1000)) +
          "Thousand " +
          convertHundreds(n % 1000)
        );
      }
      return convertHundreds(n);
    };

    const rupees = Math.floor(num);
    const paise = Math.round((num - rupees) * 100);

    let words = convertThousands(rupees).trim();
    if (words) {
      words = words.charAt(0).toUpperCase() + words.slice(1);
      words += " Rupees";
    }
    if (paise > 0) {
      if (words) words += " ";
      const paiseWords = convertHundreds(paise).trim();
      words +=
        paiseWords.charAt(0).toUpperCase() + paiseWords.slice(1) + " Paise";
    }
    if (!words) words = "Zero";
    return words + " Only";
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "8px",
          maxHeight: "95vh",
          "@media print": {
            margin: 0,
            maxWidth: "100%",
            height: "100%",
            borderRadius: 0,
          },
        },
      }}
      sx={{
        "@media print": {
          "& .MuiBackdrop-root": {
            display: "none",
          },
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          "@media print": {
            p: 3,
          },
        }}
      >
        {/* Header with close button - hidden on print */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 1,
            "@media print": {
              display: "none",
            },
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              onClick={handlePrint}
              size="small"
              sx={{
                color: "#26619A",
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
            ></IconButton>
            <IconButton
              onClick={onClose}
              size="small"
              sx={{
                color: "#26619A",
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
            ></IconButton>
          </Box>
        </Box>

        {/* Invoice Content */}
        <Box
          sx={{
            p: 2,
            bgcolor: "#ffffff",
            "@media print": {
              p: 2,
            },
          }}
        >
          {/* Company Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 3,
              pb: 2,
              borderBottom: "2px solid #e5e7eb",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={invoice}
                  alt="Company Logo"
                  sx={{
                    width: 70,
                    height: "auto",
                    borderRadius: "8px",
                    objectFit: "contain",
                  }}
                />

                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: "#1f2937", mb: 0.5 }}
                  >
                    HealthCare Direct
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    www.website.com
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Email: info@healthcaredirect.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: +91 00000 00000
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  123, Business Plaza, MG Road, Bangalore, Karnataka - 560001,
                  India
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  GSTIN: 29ABCDE1234F1Z5 | PAN: ABCDE1234F
                </Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: "right" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#1f2937",
                  mb: 2,
                  textTransform: "uppercase",
                }}
              >
                TAX INVOICE
              </Typography>
            </Box>
          </Box>

          {/* Invoice Details */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 4,
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Invoice Number:</strong> {invoiceNumber}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Order ID:</strong> {orderId}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Invoice Date:</strong> {invoiceDate}
              </Typography>
              <Typography variant="body2">
                <strong>Payment Method:</strong> {paymentMethod}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                <strong>Billed To:</strong>
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                {customerName}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 0.5 }}
              >
                {customerAddress}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 0.5 }}
              >
                {customerPhone}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 0.5 }}
              >
                Agent ID: {agentId}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Subject: {subject}
              </Typography>
            </Box>
          </Box>

          {/* Products Table */}
          <TableContainer
            component={Paper}
            sx={{
              mb: 3,
              boxShadow: "none",
              border: "1px solid #e5e7eb",
            }}
          >
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: "#f9fafb" }}>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      borderRight: "1px solid #e5e7eb",
                      py: 1.5,
                    }}
                  >
                    PRODUCT DESCRIPTION
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      borderRight: "1px solid #e5e7eb",
                      py: 1.5,
                    }}
                    align="center"
                  >
                    HSN/SAC
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      borderRight: "1px solid #e5e7eb",
                      py: 1.5,
                    }}
                    align="center"
                  >
                    QTY
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      borderRight: "1px solid #e5e7eb",
                      py: 1.5,
                    }}
                    align="center"
                  >
                    BV
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      borderRight: "1px solid #e5e7eb",
                      py: 1.5,
                    }}
                    align="right"
                  >
                    RATE
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }} align="right">
                    AMOUNT
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        borderRight: "1px solid #e5e7eb",
                        py: 2,
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {product.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        SKU: {product.sku}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: "1px solid #e5e7eb",
                        py: 2,
                      }}
                      align="center"
                    >
                      {product.hsn}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: "1px solid #e5e7eb",
                        py: 1,
                      }}
                      align="center"
                    >
                      {product.qty}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: "1px solid #e5e7eb",
                        py: 2,
                      }}
                      align="center"
                    >
                      {product.bv}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: "1px solid #e5e7eb",
                        py: 2,
                      }}
                      align="right"
                    >
                      {formatCurrency(product.rate)}
                    </TableCell>
                    <TableCell sx={{ py: 2 }} align="right">
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {formatCurrency(product.amount)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Payment Information */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Payment Method:</strong> {paymentMethod}
            </Typography>
            <Typography variant="body2">
              <strong>Payment Status:</strong> {paymentStatus}
            </Typography>
          </Box>

          {/* Summary Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: 3,
            }}
          >
            <Box sx={{ width: "300px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 1,
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <Typography variant="body2">Subtotal:</Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {formatCurrency(subtotal)}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 1,
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <Typography variant="body2">Discount:</Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, color: "#dc2626" }}
                >
                  -{formatCurrency(discount)}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 1,
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <Typography variant="body2">Shipping Charges:</Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {formatCurrency(shippingCharges)}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 1,
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <Typography variant="body2">CGST @ {cgstRate}%:</Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {formatCurrency(cgst)}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 1,
                  borderBottom: "2px solid #1f2937",
                  mb: 1,
                }}
              >
                <Typography variant="body2">SGST @ {sgstRate}%:</Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {formatCurrency(sgst)}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 1.5,
                  bgcolor: "#f9fafb",
                  px: 2,
                  borderRadius: "4px",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Grand Total:
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {formatCurrency(grandTotal)}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Amount in Words */}
          <Box
            sx={{
              mb: 3,
              p: 2,
              bgcolor: "#f9fafb",
              borderRadius: "4px",
            }}
          >
            <Typography variant="body2">
              <strong>Amount in Words:</strong> {numberToWords(grandTotal)}
            </Typography>
          </Box>

          {/* BV Information */}
          <Box
            sx={{
              mb: 3,
              p: 2,
              bgcolor: "#eff6ff",
              borderRadius: "4px",
              border: "1px solid #bfdbfe",
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
              Business Volume (BV) Information
            </Typography>
            <Typography variant="body2">
              Total BV Earned: <strong>{totalBV} BV</strong>
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5, fontStyle: "italic" }}>
              Note: This BV has been credited to your binary tree.
            </Typography>
          </Box>

          {/* Footer Note */}
          <Box
            sx={{
              mt: 4,
              pt: 2,
              borderTop: "1px solid #e5e7eb",
              textAlign: "center",
            }}
          >
            <Typography variant="caption" color="text.secondary">
              Note: This is a computer-generated invoice and does not require a
              physical signature.
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default InvoiceModal;
