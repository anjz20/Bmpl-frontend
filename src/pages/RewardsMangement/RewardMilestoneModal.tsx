import { useState } from "react";
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

interface RewardMilestoneModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    milestoneName: string;
    requirementDescription: string;
    rewardType: string;
    rewardValue: string;
    giftDescription: string;
  }) => void;
}

const RewardMilestoneModal = ({
  open,
  onClose,
  onSubmit,
}: RewardMilestoneModalProps) => {
  const [milestoneName, setMilestoneName] = useState("");
  const [requirementDescription, setRequirementDescription] = useState("");
  const [rewardType, setRewardType] = useState("");
  const [rewardValue, setRewardValue] = useState("");
  const [giftDescription, setGiftDescription] = useState("");

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({
        milestoneName,
        requirementDescription,
        rewardType,
        rewardValue,
        giftDescription,
      });
    }
    // Reset form
    setMilestoneName("");
    setRequirementDescription("");
    setRewardType("");
    setRewardValue("");
    setGiftDescription("");
    onClose();
  };

  const handleClose = () => {
    // Reset form
    setMilestoneName("");
    setRequirementDescription("");
    setRewardType("");
    setRewardValue("");
    setGiftDescription("");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "8px",
        },
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Typography variant="h6" fontWeight={600}>
          Create Reward Milestone
        </Typography>
      </DialogTitle>
      <Box sx={{ height: 1, backgroundColor: "#e5e7eb", mx: 3 }} />

      <DialogContent sx={{ pt: 3, pb: 3 }}>
        <TextField
          fullWidth
          margin="normal"
          label="Milestone Name"
          placeholder="e.g., Silver Achiever"
          InputLabelProps={{
            shrink: true,
          }}
          value={milestoneName}
          onChange={(e) => setMilestoneName(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Requirement Description"
          placeholder="e.g., 200,000 Team BV"
          InputLabelProps={{
            shrink: true,
          }}
          value={requirementDescription}
          onChange={(e) => setRequirementDescription(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />

        <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
          <TextField
            fullWidth
            label="Reward Type"
            placeholder="e.g., Cash"
            value={rewardType}
            onChange={(e) => setRewardType(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
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
            label="Reward Value"
            placeholder="e.g., 5000"
            value={rewardValue}
            onChange={(e) => setRewardValue(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
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
          label="Gift Description"
          placeholder="e.g., Smart Watch"
          value={giftDescription}
          onChange={(e) => setGiftDescription(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={handleClose}
          sx={{
            color: "#9a9ea5",
            borderRadius: "8px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#f7f8fc",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#26619A",
            color: "#ffffff",
            textTransform: "none",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#1f4d7a",
            },
          }}
        >
          Create Milestone
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RewardMilestoneModal;
