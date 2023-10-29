import { AppBar, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
