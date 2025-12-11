import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonIcon from "@mui/icons-material/Person";
import SponsorChangeModal from "../../components/SponsorChangeModal";
import PlacementCorrectionModal from "../../components/PlacementCorrectionModal";

const NodeCard = ({
  name,
  id,
  badge,
  tag,
  highlighted,
}: {
  name: string;
  id: string;
  badge?: string;
  tag?: string;
  highlighted?: boolean;
}) => (
  <Box
    sx={{
      minWidth: 150,
      minHeight: 98,
      px: 2.25,
      py: 1.5,
      bgcolor: highlighted ? "#1a73e8" : "#f7f9fc",
      color: highlighted ? "#fff" : "#2c3e50",
      borderRadius: 2,
      boxShadow: highlighted
        ? "0 12px 24px rgba(26,115,232,0.25)"
        : "0 6px 16px rgba(15,23,42,0.08)",
      border: highlighted ? "none" : "1px solid #e4e9f1",
      textAlign: "center",
      position: "relative",
    }}
  >
    <Box
      sx={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        bgcolor: highlighted ? "rgba(255,255,255,0.2)" : "#e8efff",
        color: highlighted ? "#fff" : "#1a73e8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
        mb: 1,
      }}
    >
      <PersonIcon fontSize="medium" />
    </Box>
    <Typography fontWeight={700} fontSize={15} lineHeight={1.25}>
      {name}
    </Typography>
    <Typography fontSize={13} sx={{ opacity: 0.9 }}>
      {id}
    </Typography>

    {(badge || tag) && (
      <Stack
        direction="row"
        spacing={0.5}
        justifyContent="center"
        mt={1}
        flexWrap="wrap"
      >
        {badge && (
          <Box
            sx={{
              px: 1,
              py: 0.35,
              bgcolor: highlighted ? "rgba(255,255,255,0.18)" : "#e6eefa",
              color: highlighted ? "#fff" : "#1a73e8",
              borderRadius: 1,
              fontSize: 12,
              fontWeight: 700,
              border: highlighted ? "1px solid rgba(255,255,255,0.3)" : "none",
            }}
          >
            {badge}
          </Box>
        )}
        {tag && (
          <Box
            sx={{
              px: 1,
              py: 0.35,
              bgcolor: highlighted ? "rgba(255,255,255,0.18)" : "#eaf1ff",
              color: highlighted ? "#fff" : "#1a73e8",
              borderRadius: 1,
              fontSize: 12,
              fontWeight: 800,
              border: highlighted ? "1px solid rgba(255,255,255,0.3)" : "none",
            }}
          >
            {tag}
          </Box>
        )}
      </Stack>
    )}
  </Box>
);

const VerticalLine = ({ height = 32 }: { height?: number }) => (
  <Box
    sx={{
      width: 2,
      height,
      bgcolor: "#c6cfde",
    }}
  />
);

const HorizontalLine = ({ width = 120 }: { width?: number }) => (
  <Box
    sx={{
      height: 2,
      width,
      bgcolor: "#c6cfde",
    }}
  />
);

const GenealogyPlacement = () => {
  const [sponsorModalOpen, setSponsorModalOpen] = useState(false);
  const [placementModalOpen, setPlacementModalOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            borderRadius: 2,
            border: "1px solid #e6e8ec",
            bgcolor: "#fff",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 2,
            }}
          >
            <TextField
              fullWidth
              placeholder="Search by name, email, or phone..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#9a9ea5" }} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              select
              label="Package Type"
              defaultValue="all"
              SelectProps={{ native: true }}
            >
              <option value="all">All Package</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
            </TextField>

            <TextField
              fullWidth
              select
              label="Status"
              defaultValue="all"
              SelectProps={{ native: true }}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </TextField>
          </Box>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            borderRadius: 2,
            border: "1px solid #e6e8ec",
            bgcolor: "#fff",
            minHeight: 520,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography fontWeight={700} fontSize={15}>
              Binary Genealogy Tree
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small">
                <ZoomOutIcon />
              </IconButton>
              <IconButton size="small">
                <ZoomInIcon />
              </IconButton>
              <IconButton size="small">
                <OpenInFullIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3.5,
              position: "relative",
            }}
          >
            <NodeCard
              name="Ramesh Kumar"
              id="AG445678"
              badge="Silver"
              tag="2450BV"
              highlighted
            />

            <VerticalLine height={38} />
            <HorizontalLine width={260} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: 720,
                px: { xs: 1, md: 6 },
                gap: { xs: 2, md: 8 },
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2.5,
                }}
              >
                <NodeCard
                  name="Raj Shah"
                  id="AG445678"
                  badge="Silver"
                  tag="2450BV"
                />
                <VerticalLine height={34} />
                <HorizontalLine width={120} />
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <NodeCard
                    name="Raj Shah"
                    id="AG445678"
                    badge="Silver"
                    tag="2450BV"
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2.5,
                }}
              >
                <NodeCard
                  name="Priya Sharma"
                  id="AG445678"
                  badge="Silver"
                  tag="2450BV"
                />
                <VerticalLine height={34} />
                <HorizontalLine width={120} />
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <NodeCard
                    name="Priya Sharma"
                    id="AG445678"
                    badge="Silver"
                    tag="2450BV"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Paper
        elevation={0}
        sx={{
          width: 360,
          borderRadius: 2,
          border: "1px solid #e6e8ec",
          bgcolor: "#fff",
          p: 2.5,
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
          }}
        >
          <Box>
            <Typography fontWeight={700} fontSize={16} color="#1a73e8">
              John Smith
            </Typography>
            <Typography fontSize={12} color="#7a7f85">
              Member Details & Information
            </Typography>
          </Box>
          <Box
            sx={{
              px: 1.5,
              py: 0.5,
              bgcolor: "#e6f6ee",
              color: "#0c8b4a",
              borderRadius: 1.5,
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            Active
          </Box>
        </Box>

        <Stack spacing={1} mb={2}>
          <Typography fontSize={13}>
            <strong>Email:</strong> john.smith@example.com
          </Typography>
          <Typography fontSize={13}>
            <strong>Phone:</strong> +1 234 567 8901
          </Typography>
          <Typography fontSize={13}>
            <strong>Join Date:</strong> 1/15/2024
          </Typography>
        </Stack>

        <Divider sx={{ my: 1.5 }} />

        <Typography fontWeight={700} fontSize={14} mb={1}>
          Placement Information
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            borderColor: "#e8ecf1",
            bgcolor: "#f9fbff",
            p: 1.5,
            borderRadius: 1.5,
            mb: 2,
          }}
        >
          <Stack spacing={0.75}>
            <Typography fontSize={13}>
              <strong>Position:</strong> left
            </Typography>
            <Typography fontSize={13}>
              <strong>Sponsor:</strong> John Smith
            </Typography>
            <Typography fontSize={12} color="#9aa0a6">
              AG-XX15
            </Typography>
          </Stack>
        </Paper>

        <Typography fontWeight={700} fontSize={14} mb={1}>
          Audit Logs
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            borderColor: "#e8ecf1",
            bgcolor: "#fff",
            p: 1.5,
            borderRadius: 1.5,
            mb: 2,
          }}
        >
          <Typography fontSize={13} fontWeight={600}>
            Meena456 moved Right → Left by Admin
          </Typography>
          <Typography fontSize={12} color="#9aa0a6">
            28-Oct-2025 10:12 — Fix wrong placement
          </Typography>
        </Paper>

        <Typography fontWeight={700} fontSize={14} mb={1}>
          Admin Actions
        </Typography>
        <Stack direction="row" spacing={1.5}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<CheckCircleIcon />}
            sx={{ bgcolor: "#1a73e8", "&:hover": { bgcolor: "#1765c1" } }}
            onClick={() => setPlacementModalOpen(true)}
          >
            Correct Placement
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#53b461",
              "&:hover": { bgcolor: "#45a352" },
              whiteSpace: "nowrap",
            }}
            onClick={() => setSponsorModalOpen(true)}
          >
            Change Sponsor
          </Button>
        </Stack>
      </Paper>

      <SponsorChangeModal
        open={sponsorModalOpen}
        onClose={() => setSponsorModalOpen(false)}
        onSubmit={(data) => {
          console.log("Sponsor change submitted", data);
          setSponsorModalOpen(false);
        }}
      />

      <PlacementCorrectionModal
        open={placementModalOpen}
        onClose={() => setPlacementModalOpen(false)}
        onApply={(data) => {
          console.log("Placement correction submitted", data);
          setPlacementModalOpen(false);
        }}
      />
    </Box>
  );
};

export default GenealogyPlacement;
