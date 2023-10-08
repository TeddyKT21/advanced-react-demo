import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {UseReducerPage} from "./pages/UseReducerPage";
import { Box, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Settings from "./pages/Settings";
import { darkTheme, lightTheme } from "./themes";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import MemoExamplePage from "./pages/MemoPage";
import UseMemoPage from "./pages/UseMemoPage";
import { UseStatePage } from "./pages/UseStatePage";
import Footer from "./components/layout/Footer";
import CustomHookPage from "./pages/CustomHookPage";
import { UseCallbackPage } from "./pages/UseCallbackPage";

function App() {
  const themeString = useSelector((state:RootState) => state.theme.theme)
  const theme = themeString === 'light' ? lightTheme : darkTheme;
  return (
    <>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "flex",
              width: "100vw",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "background.default",
              color: "text.primary",
              borderRadius: 1,
              p: 3,
              height: "100vh",
              margin: "0",
              padding: "0",
            }}
          >
            <BrowserRouter>
            <Header/>
              <Routes>
                <Route path="/useReducer" element={<UseReducerPage />} />
                <Route path="/useState" element={<UseStatePage/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/memo" element={<MemoExamplePage/>}/>
                <Route path="/useMemo" element={<UseMemoPage/>}/>
                <Route path="/useCallback" element={<UseCallbackPage/>}/>
                <Route path="/customHook" element={<CustomHookPage/>}/>
              </Routes>
              <Footer/>
            </BrowserRouter>
          </Box>
        </ThemeProvider>
    </>
  );
}

export default App;
