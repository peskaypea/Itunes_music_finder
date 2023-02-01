import { Typography, AppBar, Toolbar } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

import React from "react";

const Nav = () => {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <MusicNoteIcon />
          <Typography varient="h3">Windy Tunes</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
