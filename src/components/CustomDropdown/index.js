import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";

const CustomDropdown = ({
  label,
  name,
  value,
  options,
  onChange,
  width,
  height,
}) => {
  const customStyles = {
    width: width || "100%", // Set the width, defaulting to 100% if not provided
    height: height || "auto", // Set the height, defaulting to auto if not provided
  };

  return (
    <FormControl fullWidth margin="normal" style={customStyles}>
      <Typography variant="subtitle2" gutterBottom>
        {label}
      </Typography>
      <Select name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomDropdown;
