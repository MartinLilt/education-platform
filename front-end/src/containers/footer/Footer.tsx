import { AppBar, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} Your Company Name
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
