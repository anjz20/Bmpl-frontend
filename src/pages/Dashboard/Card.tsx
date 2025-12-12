import type { ReactNode } from "react";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import {
  PendingActions,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
} from "@mui/icons-material";

type StatCardData = {
  id: string;
  label: string;
  value: string;
  change: string;
  changeLabel: string;
  changeColor: string;
  icon: ReactNode;
  iconColor: string;
  iconBg: string;
};

const statCards: StatCardData[] = [
  {
    id: "total-sales",
    label: "Total Sales",
    value: "₹2,84,750",
    change: "+8.5%",
    changeLabel: "from last week",
    changeColor: "success.main",
    icon: <ShoppingBag fontSize="small" />,
    iconColor: "#1b5e20",
    iconBg: "#e8f5e9",
  },
  {
    id: "total-bv",
    label: "Total BV Generated",
    value: "18,420",
    change: "+8.3%",
    changeLabel: "from last week",
    changeColor: "success.main",
    icon: <TrendingUp fontSize="small" />,
    iconColor: "#1a237e",
    iconBg: "#e8eaf6",
  },
  {
    id: "orders",
    label: "Orders This Week",
    value: "1,248",
    change: "+5.5%",
    changeLabel: "from last week",
    changeColor: "success.main",
    icon: <ShoppingCart fontSize="small" />,
    iconColor: "#1b5e20",
    iconBg: "#f1f8e9",
  },
  {
    id: "pending-kyc",
    label: "Pending KYC",
    value: "23",
    change: "+8.5%",
    changeLabel: "from last week",
    changeColor: "success.main",
    icon: <PendingActions fontSize="small" />,
    iconColor: "#e65100",
    iconBg: "#fff3e0",
  },
];

function DashboardSummaryCards() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(auto-fit, minmax(220px, 1fr))",
          md: "repeat(4, 1fr)",
        },
        gap: 3,
        mb: 3,
      }}
    >
      {statCards.map((stat) => (
        <Paper
          key={stat.id}
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                {stat.value}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  color={stat.changeColor}
                >
                  {stat.change}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {stat.changeLabel}
                </Typography>
              </Box>
            </Box>
            <Avatar
              sx={{
                bgcolor: stat.iconBg,
                color: stat.iconColor,
                width: 42,
                height: 42,
              }}
            >
              {stat.icon}
            </Avatar>
          </Box>
        </Paper>
      ))}
    </Box>
  );
}

export default DashboardSummaryCards;
