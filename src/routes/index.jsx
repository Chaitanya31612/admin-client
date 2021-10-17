import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setSiteDetails } from "../redux/actions/siteInfo";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/Global";

import Homepage from "../pages/Homepage";
import LayoutComponent from "../components/Admin/LayoutComponent";
import { AdminDashboard, MenuLinksContainer } from "../containers/Admin";
import axios from "axios";
import SubjectsContainer from "../containers/Admin/SubjectsContainer";
import VideoDetailsContainer from "../containers/Admin/VideoDetailsContainer";
import OtherDetailsContainer from "../containers/Admin/OtherDetailsContainer";

const theme = {
  colors: {
    primary: "#003366",
    lightPrimary: "#00468C",
    lightPrimary1: "#1A69B8",
    darkPrimary: "#001933",
    lightBlue: "#8ab4f8",
    darkBlue: "#4485ee",
    lightGrey: "#eee",
    lightGrey1: "#f9f9f9",
    lightGrey2: "#e5e5e5",
    lightGrey3: "#F4F1F1",
    darkGrey: "#333",
    darkGrey1: "#444",
    darkGrey2: "#222",
  },
  defaultfontSize: "16px",
  increaseFont: () => {},
  decreaseFont: () => {},
  resetFont: () => {},
};

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(process.env.REACT_APP_BASE_URL);
    const getDetails = async () => {
      const details = await axios
        .get(`${process.env.REACT_APP_BASE_URL}/api/getsitedata`)
        .then((response) => response.data)
        .catch((e) => console.log(e));

      dispatch(setSiteDetails(details[0]));
      // console.log(details);
    };

    getDetails();
  }, []);

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

            <Redirect exact from="/admin" to="/admin/dashboard" />
            <Route exact path="/admin/dashboard">
              <AdminDashboard />
            </Route>

            <Route exact path="/admin/menus/:option">
              <MenuLinksContainer />
            </Route>

            <Route exact path="/admin/subject/:option">
              <SubjectsContainer />
            </Route>

            <Route exact path="/admin/details/:option">
              <VideoDetailsContainer />
            </Route>

            <Route exact path="/admin/otherdetails/:option">
              <OtherDetailsContainer />
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
