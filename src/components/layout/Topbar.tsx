import {
  AppBar,
  Toolbar,
  Box,
  Avatar,
  Typography,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  InputBase,
  Paper
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [langMenu, setLangMenu] = useState<null | HTMLElement>(null);
  const [userMenu, setUserMenu] = useState<null | HTMLElement>(null);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        color: "#333",
        borderBottom: "1px solid #e6e8ec",
        px: 2,
        zIndex: 1201,
      }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        
        

        {/* SEARCH BAR */}
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            background: "#f7f8fc",
            borderRadius: 50,
            px: 2,
            py: 0.5,
            width: "350px",
            boxShadow: "none",
            border: "1px solid #eee",
          }}
        >
          <SearchIcon sx={{ color: "#9a9ea5" }} />
          <InputBase
            placeholder="Search"
            sx={{ ml: 1, flex: 1 }}
          />
        </Paper>

        <Box sx={{ flexGrow: 1 }} />

        {/* NOTIFICATION */}
        <IconButton>
          <Badge badgeContent={6} color="error">
            <NotificationsIcon sx={{ color: "#5570f1" }} />
          </Badge>
        </IconButton>

        {/* SPACING */}
        <Box sx={{ mx: 2 }} />

        {/* LANGUAGE DROPDOWN */}
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={(e) => setLangMenu(e.currentTarget)}
        >
          <img
            src="https://flagcdn.com/w40/gb.png"
            alt="flag"
            style={{ width: 32, borderRadius: 4 }}
          />
          <Typography sx={{ mx: 1 }}>English</Typography>
          <KeyboardArrowDownIcon fontSize="small" />
        </Box>

        <Menu
          anchorEl={langMenu}
          open={Boolean(langMenu)}
          onClose={() => setLangMenu(null)}
        >
          <MenuItem onClick={() => setLangMenu(null)}>English</MenuItem>
          <MenuItem onClick={() => setLangMenu(null)}>Hindi</MenuItem>
        </Menu>

        {/* SPACING */}
        <Box sx={{ mx: 2 }} />

        {/* USER PROFILE */}
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={(e) => setUserMenu(e.currentTarget)}
        >
          <Avatar
            src="https://i.pravatar.cc/50"
            alt="Profile"
            sx={{ width: 40, height: 40 }}
          />
          <Box sx={{ ml: 1 }}>
            <Typography sx={{ fontWeight: 600 }}>Moni Roy</Typography>
            <Typography sx={{ fontSize: 12, color: "#7a7f85" }}>Admin</Typography>
          </Box>
          <KeyboardArrowDownIcon sx={{ ml: 1 }} />
        </Box>

        <Menu
          anchorEl={userMenu}
          open={Boolean(userMenu)}
          onClose={() => setUserMenu(null)}
        >
          <MenuItem component={Link} to="/profile">My Profile</MenuItem>
          <MenuItem component={Link} to="/settings">Settings</MenuItem>
          <MenuItem component={Link} to="/logout">Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
