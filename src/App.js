import Search from "./components/Search";
import Nav from "./components/Nav";

import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Nav />

      <h2>Let's get started!</h2>
      <Search />
    </>
  );
}

export default App;
