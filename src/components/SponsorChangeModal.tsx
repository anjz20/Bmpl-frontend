import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

export interface SponsorChangeForm {
  agentId: string;
  newSponsorId: string;
  reason: string;
}

interface SponsorChangeModalProps {
  open: boolean;
  initialForm?: SponsorChangeForm;
  onClose: () => void;
  onSubmit: (form: SponsorChangeForm) => void;
}

const defaultForm: SponsorChangeForm = {
  agentId: "AG-XXXX",
  newSponsorId: "AG-XXXX",
  reason: "",
};

const SponsorChangeModal = ({
  open,
  initialForm,
  onClose,
  onSubmit,
}: SponsorChangeModalProps) => {
  const [form, setForm] = useState<SponsorChangeForm>(
    initialForm || defaultForm
  );

  useEffect(() => {
    if (open) {
      setForm(initialForm || defaultForm);
    }
  }, [open, initialForm]);

  const handleChange = (
    field: keyof SponsorChangeForm,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Change Sponsor</DialogTitle>
      <DialogContent sx={{ pt: 1 }}>
        <TextField
          fullWidth
          margin="normal"
          label="Agent ID"
          placeholder="AG-XXXX"
          value={form.agentId}
          onChange={(event) => handleChange("agentId", event)}
        />

        <TextField
          fullWidth
          margin="normal"
          label="New Sponsor ID"
          placeholder="AG-XXXX"
          value={form.newSponsorId}
          onChange={(event) => handleChange("newSponsorId", event)}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Reason"
          placeholder="Enter reason for change"
          multiline
          minRows={3}
          value={form.reason}
          onChange={(event) => handleChange("reason", event)}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            bgcolor: "#c5c9d7",
            color: "#ffffff",
            "&:hover": { bgcolor: "#b3b7c8" },
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "#1a73e8", "&:hover": { bgcolor: "#1765c1" } }}
          onClick={handleSubmit}
        >
          Change Sponsor
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SponsorChangeModal;
