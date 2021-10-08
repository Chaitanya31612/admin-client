import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/Global";

import Homepage from "../pages/Homepage";
import AdminPanel from "../pages/Admin";

const theme = {
  colors: {
    primary: "#003366",
    lightPrimary: "#00468C",
    darkPrimary: "#001933",
    lightGrey: "#eee",
    lightGrey1: "#f9f9f9",
    darkGrey: "#333",
  },
  defaultfontSize: "16px",
  increaseFont: () => {},
  decreaseFont: () => {},
  resetFont: () => {},
};

export default function App() {
  const [fontSize, setfontSize] = useState(theme.defaultfontSize);
  const increaseFont = () => {
    setfontSize(parseInt(fontSize) + 1 + "px");
  };
  const decreaseFont = () => {
    setfontSize(parseInt(fontSize) - 1 + "px");
  };
  const resetFont = () => {
    setfontSize(theme.defaultfontSize);
  };

  return (
    <ThemeProvider theme={{ ...theme, increaseFont, decreaseFont, resetFont }}>
      <GlobalStyle fontSize={fontSize} />
      <Router>
        <MainWrapper>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home">
              <Homepage />
            </Route>
            <Route exact path="/admin">
              <AdminPanel />
            </Route>
            <Route>404</Route>
          </Switch>
        </MainWrapper>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}

const MainWrapper = styled.div`
  overflow-x: hidden;
`;
