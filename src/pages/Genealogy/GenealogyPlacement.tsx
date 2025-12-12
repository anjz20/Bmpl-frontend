import { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Typography,
  IconButton,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import PersonIcon from "@mui/icons-material/Person";
import PlacementCorrectionModal from "./PlacementCorrectionModal";
import SponsorChangeModal from "./SponsorChangeModal";

const GenealogyPlacement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [packageType, setPackageType] = useState("all");
  const [status, setStatus] = useState("all");
  const [placementModalOpen, setPlacementModalOpen] = useState(false);
  const [sponsorModalOpen, setSponsorModalOpen] = useState(false);

  const handlePlacementCorrection = () => {
    setPlacementModalOpen(true);
  };

  const handleChangeSponsor = () => {
    setSponsorModalOpen(true);
  };

  // Tree Node Component
  const TreeNode = ({
    name,
    id,
    packageType,
    bv,
    isRoot = false,
    left,
    right,
  }: {
    name: string;
    id: string;
    packageType: string;
    bv: string;
    isRoot?: boolean;
    left?: React.ReactNode;
    right?: React.ReactNode;
  }) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Node Card */}
        <Paper
          elevation={0}
          sx={{
            p: 1.5,
            minWidth: 140,
            borderRadius: 2,
            backgroundColor: isRoot ? "#3D42DF" : "#E3F2FD",
            border: isRoot ? "none" : "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
            boxShadow: isRoot ? "none" : "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <PersonIcon
            sx={{
              fontSize: 28,
              color: isRoot ? "#ffffff" : "#2E7D32",
              mb: 0.75,
            }}
          />
          <Typography
            variant="body2"
            fontWeight={600}
            sx={{
              color: isRoot ? "#ffffff" : "#1E3A8A",
              mb: 0.5,
              fontSize: "0.875rem",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: isRoot ? "rgba(255,255,255,0.9)" : "#757575",
              mb: 1,
              fontSize: "0.7rem",
            }}
          >
            {id}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 0.5,
              mt: 0.5,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Chip
              label={packageType}
              size="small"
              sx={{
                height: 22,
                fontSize: "0.65rem",
                backgroundColor: isRoot ? "rgba(255,255,255,0.2)" : "#BBDEFB",
                color: isRoot ? "#ffffff" : "#1E3A8A",
                fontWeight: 500,
                borderRadius: "6px",
                border: "none",
              }}
            />
            <Chip
              label={bv}
              size="small"
              sx={{
                height: 22,
                fontSize: "0.65rem",
                backgroundColor: isRoot ? "rgba(255,255,255,0.2)" : "#BBDEFB",
                color: isRoot ? "#ffffff" : "#1E3A8A",
                fontWeight: 500,
                borderRadius: "6px",
                border: "none",
              }}
            />
          </Box>
        </Paper>

        {/* Children Container with Lines */}
        {(left || right) && (
          <Box
            sx={{
              display: "flex",
              gap: 6,
              mt: 3,
              position: "relative",
            }}
          >
            {/* Vertical line down from parent */}
            <Box
              sx={{
                position: "absolute",
                top: -16,
                left: "50%",
                transform: "translateX(-50%)",
                width: 2,
                height: 16,
                backgroundColor: "#e6e8ec",
                zIndex: 1,
              }}
            />
            {/* Horizontal line connecting children */}
            {left && right && (
              <Box
                sx={{
                  position: "absolute",
                  top: -16,
                  left: 0,
                  right: 0,
                  height: 2,
                  backgroundColor: "#e6e8ec",
                  zIndex: 1,
                }}
              />
            )}

            {left && (
              <Box sx={{ position: "relative" }}>
                {/* Vertical line up to left child */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 2,
                    height: 16,
                    backgroundColor: "#e6e8ec",
                    zIndex: 1,
                  }}
                />
                {left}
              </Box>
            )}
            {right && (
              <Box sx={{ position: "relative" }}>
                {/* Vertical line up to right child */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 2,
                    height: 16,
                    backgroundColor: "#e6e8ec",
                    zIndex: 1,
                  }}
                />
                {right}
              </Box>
            )}
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Box sx={{ p: 1.5 }}>
      {/* Top Section - Search and Filters */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {/* Search */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body2"
            fontWeight={500}
            sx={{ mb: 1, color: "#333333" }}
          >
            Search
          </Typography>
          <TextField
            placeholder="Search by name, email, or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#9a9ea5" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f7f8fc",
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "#e6e8ec",
                  borderRadius: "8px",
                },
                "&:hover fieldset": {
                  borderColor: "#e6e8ec",
                  borderRadius: "8px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#5570f1",
                  borderRadius: "8px",
                },
              },
            }}
          />
        </Box>

        {/* Package Type */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body2"
            fontWeight={500}
            sx={{ mb: 1, color: "#333333" }}
          >
            Package Type
          </Typography>
          <FormControl
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f7f8fc",
                borderRadius: "12px",
                "& fieldset": {
                  borderColor: "#e6e8ec",
                  borderRadius: "12px",
                },
                "&:hover fieldset": {
                  borderRadius: "12px",
                },
                "&.Mui-focused fieldset": {
                  borderRadius: "12px",
                },
              },
            }}
          >
            <Select
              value={packageType}
              onChange={(e) => setPackageType(e.target.value)}
              displayEmpty
            >
              <MenuItem value="all">All Package</MenuItem>
              <MenuItem value="star">Star</MenuItem>
              <MenuItem value="gold">Gold</MenuItem>
              <MenuItem value="silver">Silver</MenuItem>
              <MenuItem value="ibo">IBO</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Status */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body2"
            fontWeight={500}
            sx={{ mb: 1, color: "#333333" }}
          >
            Status
          </Typography>
          <FormControl
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f7f8fc",
                borderRadius: "12px",
                "& fieldset": {
                  borderColor: "#e6e8ec",
                  borderRadius: "12px",
                },
                "&:hover fieldset": {
                  borderRadius: "12px",
                },
                "&.Mui-focused fieldset": {
                  borderRadius: "12px",
                },
              },
            }}
          >
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              displayEmpty
            >
              <MenuItem value="all">All Status</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Main Content - Tree and Member Details */}
      <Box sx={{ display: "flex", gap: 2, height: "calc(100vh - 250px)" }}>
        {/* Left Panel - Binary Genealogy Tree */}
        <Paper
          elevation={0}
          sx={{
            flex: 2,
            p: 3,
            border: "1px solid #e6e8ec",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          {/* Tree Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                color: "#1E3A8A",
                fontSize: "1.25rem",
              }}
            >
              Binary Genealogy Tree
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                size="small"
                sx={{
                  backgroundColor: "#f7f8fc",
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  "&:hover": { backgroundColor: "#e6e8ec" },
                }}
              >
                <ZoomInIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  backgroundColor: "#f7f8fc",
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  "&:hover": { backgroundColor: "#e6e8ec" },
                }}
              >
                <ZoomOutIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          {/* Tree Container */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flex: 1,
              overflow: "auto",
              pt: 2,
            }}
          >
            <TreeNode
              name="Ramesh Kumar"
              id="AG445678"
              packageType="Silver"
              bv="2450BV"
              isRoot={true}
              left={
                <TreeNode
                  name="Raj Shah"
                  id="AG445678"
                  packageType="Silver"
                  bv="2450BV"
                  left={
                    <TreeNode
                      name="Raj Shah"
                      id="AG445678"
                      packageType="Silver"
                      bv="2450BV"
                    />
                  }
                  right={
                    <TreeNode
                      name="Priya Sharma"
                      id="AG445678"
                      packageType="Silver"
                      bv="2450BV"
                    />
                  }
                />
              }
              right={
                <TreeNode
                  name="Priya Sharma"
                  id="AG445678"
                  packageType="Silver"
                  bv="2450BV"
                />
              }
            />
          </Box>
        </Paper>

        {/* Right Panel - Member Details */}
        <Paper
          elevation={0}
          sx={{
            flex: 1,
            p: 3,
            border: "1px solid #e6e8ec",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          {/* Member Header */}
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: 1,
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ color: "#26619A", fontSize: "1.5rem" }}
              >
                John Smith
              </Typography>
              <Chip
                label="Active"
                sx={{
                  backgroundColor: "#4caf50",
                  color: "#ffffff",
                  fontWeight: 500,
                  height: 24,
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "#757575", fontSize: "0.875rem" }}
            >
              Member Details & Information
            </Typography>
          </Box>

          {/* Member Details */}
          <Box sx={{ mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1.5,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#757575", fontSize: "0.875rem" }}
              >
                Email
              </Typography>
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{ color: "#333333", textAlign: "left" }}
              >
                john.smith@example.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1.5,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#757575", fontSize: "0.875rem" }}
              >
                Phone
              </Typography>
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{ color: "#333333", textAlign: "left" }}
              >
                +1 234 567 8901
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#757575", fontSize: "0.875rem" }}
              >
                Join Date
              </Typography>
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{ color: "#333333", textAlign: "left" }}
              >
                1/15/2024
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 1 }} />

          {/* Placement Information */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{ mb: 1, fontSize: "0.875rem", color: "#26619A" }}
            >
              Placement Information
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1.5,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#757575", fontSize: "0.875rem" }}
              >
                Position
              </Typography>
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{ color: "#333333", textAlign: "left" }}
              >
                left
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#757575", fontSize: "0.875rem" }}
              >
                Sponsor
              </Typography>
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  sx={{ color: "#333333" }}
                >
                  John Smith
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#757575", fontSize: "0.75rem" }}
                >
                  AG-XX15
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 1 }} />

          {/* Audit Logs */}
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{ mb: 2, fontSize: "0.875rem", color: "#26619A" }}
            >
              Audit Logs
            </Typography>
            <Box
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                p: 1.5,
              }}
            >
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{ mb: 0.5, color: "#333333" }}
              >
                Meena456 moved Right → Left by Admin
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#757575", fontSize: "0.75rem" }}
              >
                28-Oct-2025 10:12 — Fix wrong placement
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 1 }} />

          {/* Admin Actions */}
          <Box>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{ mb: 2, fontSize: "0.875rem", color: "#26619A" }}
            >
              Admin Actions
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
              <Button
                variant="contained"
                onClick={handlePlacementCorrection}
                sx={{
                  backgroundColor: "#26619A",
                  color: "#ffffff",
                  textTransform: "none",
                  fontWeight: 500,
                  borderRadius: "8px",
                  py: 1,
                  flex: 1,
                  "&:hover": {
                    backgroundColor: "#1976d2",
                  },
                }}
              >
                Correct Placement
              </Button>
              <Button
                variant="contained"
                onClick={handleChangeSponsor}
                sx={{
                  backgroundColor: "#4caf50",
                  color: "#ffffff",
                  textTransform: "none",
                  fontWeight: 500,
                  borderRadius: "8px",
                  py: 1,
                  flex: 1,
                  "&:hover": {
                    backgroundColor: "#45a049",
                  },
                }}
              >
                Change Sponsor
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Modals */}
      <PlacementCorrectionModal
        open={placementModalOpen}
        onClose={() => setPlacementModalOpen(false)}
        onApply={() => {
          setPlacementModalOpen(false);
        }}
      />

      <SponsorChangeModal
        open={sponsorModalOpen}
        onClose={() => setSponsorModalOpen(false)}
        onSubmit={() => {
          setSponsorModalOpen(false);
        }}
      />
    </Box>
  );
};

export default GenealogyPlacement;
