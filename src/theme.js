import React from "react";
import { theme, CSSReset, ThemeProvider } from "@chakra-ui/core";

//background: "#FAFAF9",
const AppTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    text: "#262626",
    background: "#eee",
    bg: "#FAFAF9",
    headerBg: "#222",
    headerBgHover: "#080808",
    headerText: "#9D9D9D",
    headerTextHover: "#fff",
    headerBorder: "#333",
    primary: "#E63B19",
    secondary: "#CC4C33",
    highlight: "#F0DFDB",
    muted: "#F3EEED",
    bg1: "#aaa123",
    bg2: "#bbb123",
    bg3: "#ccc123",
    bg4: "#ddd123"
  },

  breakpoints: ["30em", "48em", "90em", "200em"],

  fonts: {
    ...theme.fonts,
    heading: "Montserrat, sans-serif",
    body: "Roboto, sans-serif",
    mono: "Roboto Mono, monospace"
  },

  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700
  },
  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2"
  },

  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },

  space: {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem"
  }
};

export const Provider = props => {
  return (
    <ThemeProvider theme={AppTheme}>
      <CSSReset />
      {props.children}
    </ThemeProvider>
  );
};
