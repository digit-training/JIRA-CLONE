import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import CustomDropdown from "../CustomDropdown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  componentOptions,
  issueOptions,
  labelOptions,
  projectOptions,
  statusOptions,
} from "./data";

const PopupScreen = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    Project: "",
    Issue: "",
    Status: "",
    Labels: "",
    message: "",
    summary: "",
    Components: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = () => {
    // Implement your logic to handle form submission here
    dispatch({
      type: "ADD_CARDS",
      payload: formData, // Add the form data as payload
    });
    console.log("Form data:", formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth>
      <DialogTitle>Create Issue</DialogTitle>
      <DialogContent>
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <CustomDropdown
              label="Project*"
              name="Project"
              value={formData.Project}
              options={projectOptions}
              onChange={handleChange}
            />
            <CustomDropdown
              label="Issue*"
              name="Issue"
              value={formData.Issue}
              options={issueOptions}
              onChange={handleChange}
            />
            <Link href="#" underline="none">
              <small>Learn more...</small>
            </Link>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={4} style={{ paddingLeft: "0" }}>
            <Button variant="outlined" style={{ width: "fit-content" }}>
              Import issue
            </Button>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomDropdown
              label="Status"
              name="Status"
              value={formData.Status}
              options={statusOptions}
              onChange={handleChange}
              width={"100px"}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomDropdown
              label="Labels"
              name="Labels"
              value={formData.Labels}
              options={labelOptions}
              onChange={handleChange}
              width={"50%"}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Summary
            </Typography>
            <TextField
              label="Summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <CustomDropdown
              label="Components"
              name="Components"
              value={formData.Components}
              options={componentOptions}
              onChange={handleChange}
              width={"50%"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupScreen;
