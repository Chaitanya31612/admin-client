import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  ::-webkit-scrollbar {
    height: 8px;
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1e5;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(107, 107, 107);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(141, 140, 140);
  }

  body {
    margin: 0;
    font-family: "Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overscroll-behavior: none;
    width: 100vw;
    overflow-x: hidden;
    font-size: ${((props) => props.fontSize) || "16px"};
  }
`;

export default GlobalStyle;
