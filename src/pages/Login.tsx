// src/pages/Login.tsx
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import logo from "../assets/BMPL 1.png";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#e5e5e5",
      }}
    >
      <Paper
        sx={{
          p: 4,
          width: 450,
          borderRadius: 2,
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
          }}
        >
          <img
            src={logo}
            alt="BMPL Logo"
            style={{ width: "140px", marginBottom: "8px" }}
          />
        </Box>

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            color: "#26619A",
            fontWeight: 600,
            mb: 1,
            textAlign: "center",
          }}
        >
          Sign In
        </Typography>

        {/* Instruction Text */}
        <Typography
          variant="body2"
          sx={{
            color: "#757575",
            mb: 3,
            textAlign: "center",
          }}
        >
          Please enter your details to sign in
        </Typography>

        {/* Email Field */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="body2"
            sx={{
              color: "#424242",
              mb: 1,
              fontWeight: 500,
            }}
          >
            Email Address
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your email address"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "#e0e0e0",
                  borderRadius: "8px",
                },
                "&:hover fieldset": {
                  borderColor: "#bdbdbd",
                  borderRadius: "8px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1976d2",
                  borderRadius: "8px",
                },
              },
            }}
          />
        </Box>

        {/* Password Field */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="body2"
            sx={{
              color: "#424242",
              mb: 1,
              fontWeight: 500,
            }}
          >
            Password
          </Typography>
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "#e0e0e0",
                  borderRadius: "8px",
                },
                "&:hover fieldset": {
                  borderColor: "#bdbdbd",
                  borderRadius: "8px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1976d2",
                  borderRadius: "8px",
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                    sx={{ color: "#757575" }}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Login Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#26619A",
            color: "#ffffff",
            py: 1.5,
            borderRadius: 1,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "16px",
            "&:hover": {
              bgcolor: "#26619A",
            },
          }}
        >
          Log In
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
