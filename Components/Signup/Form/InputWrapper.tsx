import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  InputLabel,
} from "@mui/material";
import { HelpCenterOutlined } from "@mui/icons-material";
type Props = {
  children: React.ReactNode;
  label: string;
  helper?: string;
};

const InputWrapper = ({ children, helper, label }: Props) => {
  return (
    <FormControl required>
      <InputLabel>{label}</InputLabel>
      {children}
      <FormHelperText>{helper}</FormHelperText>
    </FormControl>
  );
};

export default InputWrapper;
