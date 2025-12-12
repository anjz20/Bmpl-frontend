import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Button,
  Container,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DownloadIcon from "@mui/icons-material/Download";

const WalletsPayouts = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", gap: 3, p: 0 }}>
      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
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
            <Tab label="Payout Schedule" />
            <Tab label="Payout History" />
            <Tab label="Wallet Ledgers" />
          </Tabs>
        </Box>

        {/* Conditional Content Based on Tab */}
        {tabValue === 0 && (
          <>
            {/* Next Payout Run Section */}
            <Container>
              <Paper
                sx={{
                  p: 3,
                  mb: 3,
                  border: "1px solid #e6e8ec",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 3, color: "#1a1a1a" }}
                >
                  Next Payout Run
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                    gap: 3,
                    mb: 2,
                    alignItems: "stretch",
                  }}
                >
                  {/* Closing Date Card */}
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: "#f5f5f5",
                      borderRadius: "12px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#26619A", mb: 1, fontWeight: 500 }}
                    >
                      Closing Date
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#1a1a1a", fontWeight: 500 }}
                    >
                      Tuesday, Oct 29, 2024
                    </Typography>
                  </Box>

                  {/* Total Payout Amount Card */}
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: "#e8f5e9",
                      borderRadius: "12px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#26619A", mb: 1, fontWeight: 500 }}
                    >
                      Total Payout Amount
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#1a1a1a", fontWeight: 500 }}
                    >
                      ₹342,100
                    </Typography>
                  </Box>

                  {/* Payout Date Card */}
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: "#f5f5f5",
                      borderRadius: "12px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#26619A", mb: 1, fontWeight: 500 }}
                    >
                      Payout Date
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#1a1a1a", fontWeight: 500 }}
                    >
                      Friday, Nov 01, 2024
                    </Typography>
                  </Box>

                  {/* Recipients Card */}
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: "#e8f5e9",
                      borderRadius: "12px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#26619A", mb: 1, fontWeight: 500 }}
                    >
                      Recipients
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#1a1a1a", fontWeight: 500 }}
                    >
                      189 Agents
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Container>

            {/* Middle Section - Two Panels */}
            <Container>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 4,
                  mb: 3,
                  alignItems: "stretch",
                }}
              >
                {/* Panel A: Deduction Rates */}
                <Paper
                  sx={{
                    p: 2.5,
                    border: "1px solid #e6e8ec",
                    borderRadius: "8px",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 2, color: "#1a1a1a" }}
                  >
                    Deduction Rates
                  </Typography>

                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                      mb: 1.5,
                    }}
                  >
                    {/* TDS Section */}
                    <Box
                      sx={{
                        p: 1.5,
                        backgroundColor: "#ffebee",
                        borderRadius: "8px",
                        border: "1px solid #ffcdd2",
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        minHeight: "80px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 0.5,
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600, color: "#1a1a1a", flex: 1 }}
                        >
                          TDS (Tax Deducted at Source)
                        </Typography>
                        <Box
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "60px",
                            height: "32px",
                            px: 1.5,
                            borderRadius: "16px",
                            border: "2px solid #c62828",
                            backgroundColor: "transparent",
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: 600, color: "#c62828" }}
                          >
                            5%
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body2" sx={{ color: "#757575" }}>
                        Deducted from gross earnings
                      </Typography>
                    </Box>

                    {/* Repurchase Wallet Section */}
                    <Box
                      sx={{
                        p: 1.5,
                        backgroundColor: "#fff3e0",
                        borderRadius: "8px",
                        border: "1px solid #ffcc80",
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        minHeight: "80px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 0.5,
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600, color: "#1a1a1a", flex: 1 }}
                        >
                          Repurchase Wallet
                        </Typography>
                        <Box
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "60px",
                            height: "32px",
                            px: 1.5,
                            borderRadius: "16px",
                            border: "2px solid #e65100",
                            backgroundColor: "transparent",
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: 600, color: "#e65100" }}
                          >
                            10%
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body2" sx={{ color: "#757575" }}>
                        Auto-credited for future orders
                      </Typography>
                    </Box>
                  </Box>

                  {/* Edit Rates Button */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#4caf50",
                      color: "#ffffff",
                      textTransform: "none",
                      fontWeight: 500,
                      py: 1.25,
                      mt: 2,
                      "&:hover": {
                        backgroundColor: "#45a049",
                      },
                    }}
                  >
                    Edit Rates
                  </Button>
                </Paper>

                {/* Panel B: Bank Transfer Settings */}
                <Paper
                  sx={{
                    p: 2.5,
                    border: "1px solid #e6e8ec",
                    borderRadius: "8px",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 2, color: "#1a1a1a" }}
                  >
                    Bank Transfer Settings
                  </Typography>

                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                      mb: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        p: 1.5,
                        backgroundColor: "#f5f5f5",
                        borderRadius: "8px",
                        border: "1px solid #e0e0e0",
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        minHeight: "80px",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "#757575", mb: 0.5, fontWeight: 500 }}
                      >
                        Payment Gateway
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "#1a1a1a", fontWeight: 500 }}
                      >
                        Razorpay Payouts API
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        p: 1.5,
                        backgroundColor: "#f5f5f5",
                        borderRadius: "8px",
                        border: "1px solid #e0e0e0",
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        minHeight: "80px",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "#757575", mb: 0.5, fontWeight: 500 }}
                      >
                        Transfer Mode
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "#1a1a1a", fontWeight: 500 }}
                      >
                        IMPS / NEFT
                      </Typography>
                    </Box>
                  </Box>

                  {/* Configure Gateway Button */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#4caf50",
                      color: "#ffffff",
                      textTransform: "none",
                      fontWeight: 500,
                      py: 1.25,
                      mt: 2,
                      "&:hover": {
                        backgroundColor: "#45a049",
                      },
                    }}
                  >
                    Configure Gateway
                  </Button>
                </Paper>
              </Box>
            </Container>

            {/* Bottom Buttons */}
            <Container sx={{ px: 3, py: 2 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 3,
                  mt: 4,
                }}
              >
                {/* Preview Payout Run Button */}
                <Button
                  variant="contained"
                  startIcon={<PlayArrowIcon />}
                  fullWidth
                  sx={{
                    backgroundColor: "#26619A",
                    color: "#ffffff",
                    textTransform: "none",
                    fontWeight: 500,
                    py: 1.5,
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#1f4d7a",
                    },
                  }}
                >
                  Preview Payout Run
                </Button>

                {/* Export Bank File Button */}
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  fullWidth
                  sx={{
                    backgroundColor: "#26619A",
                    color: "#ffffff",
                    textTransform: "none",
                    fontWeight: 500,
                    py: 1.5,
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#1f4d7a",
                    },
                  }}
                >
                  Export Bank File
                </Button>
              </Box>
            </Container>
          </>
        )}

        {/* Placeholder for other tabs */}
        {tabValue === 1 && (
          <Paper
            sx={{
              p: 3,
              border: "1px solid #e6e8ec",
              borderRadius: "8px",
              backgroundColor: "#ffffff",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#1a1a1a" }}>
              Payout History
            </Typography>
            <Typography variant="body2" sx={{ color: "#757575", mt: 2 }}>
              Payout history will be displayed here.
            </Typography>
          </Paper>
        )}

        {tabValue === 2 && (
          <Paper
            sx={{
              p: 3,
              border: "1px solid #e6e8ec",
              borderRadius: "8px",
              backgroundColor: "#ffffff",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#1a1a1a" }}>
              Wallet Ledgers
            </Typography>
            <Typography variant="body2" sx={{ color: "#757575", mt: 2 }}>
              Wallet ledgers will be displayed here.
            </Typography>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default WalletsPayouts;
