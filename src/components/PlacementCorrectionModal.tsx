import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

export interface PlacementCorrectionForm {
  agentId: string;
  newPlacementLeft: string;
  newPlacementRight: string;
  reason: string;
}

interface PlacementCorrectionModalProps {
  open: boolean;
  initialForm?: PlacementCorrectionForm;
  onClose: () => void;
  onApply: (form: PlacementCorrectionForm) => void;
}

const defaultForm: PlacementCorrectionForm = {
  agentId: "AG-XXXX",
  newPlacementLeft: "Left Leg",
  newPlacementRight: "Right Leg",
  reason: "",
};

const PlacementCorrectionModal = ({
  open,
  initialForm,
  onClose,
  onApply,
}: PlacementCorrectionModalProps) => {
  const [form, setForm] = useState<PlacementCorrectionForm>(
    initialForm || defaultForm
  );

  useEffect(() => {
    if (open) {
      setForm(initialForm || defaultForm);
    }
  }, [open, initialForm]);

  const handleChange = (
    field: keyof PlacementCorrectionForm,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleApply = () => {
    onApply(form);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "8px",
        },
      }}
    >
      <DialogTitle>Placement Correction</DialogTitle>
      <DialogContent
        sx={{
          pt: 1,
          pr: 3,
          backgroundImage:
            "linear-gradient(transparent 39px, rgba(90,110,130,0.08) 40px), linear-gradient(90deg, transparent 39px, rgba(90,110,130,0.08) 40px)",
          backgroundSize: "40px 40px",
        }}
      >
        <TextField
          fullWidth
          margin="normal"
          label="Agent ID"
          placeholder="AG-XXXX"
          value={form.agentId}
          onChange={(event) => handleChange("agentId", event)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />

        <Typography variant="subtitle2" sx={{ mt: 1, mb: 0.5 }}>
          New Placement
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 1, flexWrap: "wrap" }}>
          <TextField
            fullWidth
            label="Left Leg"
            value={form.newPlacementLeft}
            onChange={(event) => handleChange("newPlacementLeft", event)}
            sx={{
              flex: 1,
              minWidth: 200,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
          <TextField
            fullWidth
            label="Right Leg"
            value={form.newPlacementRight}
            onChange={(event) => handleChange("newPlacementRight", event)}
            sx={{
              flex: 1,
              minWidth: 200,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
        </Box>

        <TextField
          fullWidth
          margin="normal"
          label="Reason for Correction"
          placeholder="Enter the reason for this placement correction..."
          multiline
          minRows={3}
          value={form.reason}
          onChange={(event) => handleChange("reason", event)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={onClose}
          sx={{ color: "#5f6b7a", borderRadius: "8px" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#26619A",
            "&:hover": { bgcolor: "#1765c1" },
            borderRadius: "8px",
          }}
          onClick={handleApply}
        >
          Apply Correction
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlacementCorrectionModal;
