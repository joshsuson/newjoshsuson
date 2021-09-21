import React from "react";
import { createGlobalStyle } from "styled-components";
import Sidebar from "./Sidebar";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    --white: #eee;
    --light-gray: #7a818c;
    --gray: #353b45;
    --dark-gray: #090A0C;
    --light-red: #D7989E;
    --red: #c2616a;
    --dark-red: #B0454F;
    --light-green: #A9BE9D;
    --green: #789965;
    --dark-green: #576E49;
    --light-blue: #81BCC5;
    --blue: #4d9aa6;
    --dark-blue: #336870;
    --light-purple: #C3A1CE;
    --purple: #9a62ad;
    --dark-purple: #764686;
  } 

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
    background: var(--dark-gray);
    font-family: sans-serif;
    color: var(--white);
  }

  a {
    text-decoration: none;
    color: var(--white)
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
    color: var(--white);
  }

`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
