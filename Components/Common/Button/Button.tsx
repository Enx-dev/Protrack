import React from "react";
import { Button as MuiBtn, ButtonProps, styled } from "@mui/material";
type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = styled(MuiBtn)<ButtonProps>(({ theme }) => ({
  width: "100%",
  paddingBlock: "13px",
  fontSize: "1rem",
  marginBlockStart: "2rem",
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: `#${theme.palette.primary.dark}`,
  },
}));

function CustomBtn({ children, icon, type }: Props) {
  return (
    <Button type={type ? type : "button"} startIcon={icon} variant="contained">
      {children}
    </Button>
  );
}

export default CustomBtn;
