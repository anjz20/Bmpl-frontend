// src/pages/Dashboard/Dashboard.tsx
import { Box, Typography } from "@mui/material";
import SalesBVTrend from "../../components/dashboard/SalesBVTrend";
import AtCapAgents from "../../components/dashboard/AtCapAgents";
import PendingKYCApprovals from "../../components/dashboard/PendingKYCApprovals";
import RecentOrders from "../../components/dashboard/RecentOrders";
import PayoutStatus from "../../components/dashboard/PayoutStatus";
import Card from "../../components/Card";
const Dashboard = () => {
  return (
    <Box>
      {/* <Typography variant="h5" fontWeight={600} mb={3}>
        Dashboard Overview
      </Typography> */}
      <Card />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
          },
          gap: 3,
        }}
      >
        {/* Top Row */}
        <SalesBVTrend />
        <AtCapAgents />

        {/* Middle Row */}
        <Box sx={{ mt: 5 }}>
          {" "}
          <PendingKYCApprovals />
        </Box>
        <Box sx={{ mt: 5 }}>
          {" "}
          <RecentOrders />
        </Box>
      </Box>

      {/* Bottom Row - Full Width */}
      <Box sx={{ mt: 9 }}>
        <PayoutStatus />
      </Box>
    </Box>
  );
};

export default Dashboard;
