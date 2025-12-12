import { useState } from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";

interface PackageCaps {
  daily: string;
  weekly: string;
  monthly: string;
}

const Capping = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [packages, setPackages] = useState<Record<string, PackageCaps>>({
    ibo: { daily: "500", weekly: "2500", monthly: "10000" },
    silver: { daily: "500", weekly: "2500", monthly: "10000" },
    gold: { daily: "500", weekly: "2500", monthly: "10000" },
    star: { daily: "500", weekly: "2500", monthly: "10000" },
  });

  const handleEditAll = () => setIsEditing(!isEditing);

  const handleChange = (
    pkg: string,
    field: keyof PackageCaps,
    value: string
  ) => {
    setPackages((prev) => ({
      ...prev,
      [pkg]: { ...prev[pkg], [field]: value },
    }));
  };

  const packageConfigs = [
    { key: "ibo", label: "IBO Package" },
    { key: "silver", label: "Silver Package" },
    { key: "gold", label: "Gold Package" },
    { key: "star", label: "Star Package" },
  ];

  return (
    <Paper sx={{ p: 3, background: "#fff" }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, color: "#26619A", mb: 3 }}
      >
        Capping Configuration per Package
      </Typography>

      {packageConfigs.map((pkg) => (
        <Box key={pkg.key} sx={{ mb: 4 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5 }}>
            {pkg.label}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 3,
            }}
          >
            <TextField
              label="Daily Cap (BV)"
              value={packages[pkg.key].daily}
              onChange={(e) => handleChange(pkg.key, "daily", e.target.value)}
              disabled={!isEditing}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />

            <TextField
              label="Weekly Cap (BV)"
              value={packages[pkg.key].weekly}
              onChange={(e) => handleChange(pkg.key, "weekly", e.target.value)}
              disabled={!isEditing}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />

            <TextField
              label="Monthly Cap (BV)"
              value={packages[pkg.key].monthly}
              onChange={(e) => handleChange(pkg.key, "monthly", e.target.value)}
              disabled={!isEditing}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />
          </Box>
        </Box>
      ))}

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button
          variant="contained"
          onClick={handleEditAll}
          sx={{ backgroundColor: "#26619A", textTransform: "none", px: 4 }}
        >
          Edit All
        </Button>
      </Box>
    </Paper>
  );
};

export default Capping;
