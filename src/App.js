import React, { useState } from "react";
import Search from "./components/Search";
import Nav from "./components/Nav";

import { CssBaseline, createTheme, ThemeProvider, Paper } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#482880",
        light: "#8561c5",
        dark: "#673ab7",
      },
    },
  });

  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Paper theme={theme} style={{ height: "250vh" }}>
          <Nav check={darkMode} change={() => setDarkMode(!darkMode)} />
          <Search theme={theme} />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
