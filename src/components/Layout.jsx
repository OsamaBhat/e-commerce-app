import React from 'react'
import { ThemeProvider,createTheme} from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Outlet } from 'react-router-dom';

const theme= createTheme({
    palette: {
        mode:"light",
    },
});
export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <Outlet />
        </main>
        <footer></footer>
    </ThemeProvider>
  );
}
