import { Box, Toolbar, Switch, Typography, AppBar } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

<MusicNoteIcon />;

export default function ButtonAppBar({ check, change }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MusicNoteIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Windy Tunes
          </Typography>
          <Switch
            defaultChecked
            color="secondary"
            onChange={change}
            checked={check}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
